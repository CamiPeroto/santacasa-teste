'use client';

import { InputRHF } from '@/components/RHF/inputRHF';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useMultiStep } from '@/contexts/multi-step-context';
import { GenderEnumType } from '@/enums/gender';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { GenderSelectRHF } from '../../../../components/RHF/genderSelectRHF';

const formSchema = z.object({
  fullName: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\(\d{2}\) \d \d{4}-\d{4}$/.test(val),
      'Telefone inválido',
    ),
  birthDate: z
    .string()
    .optional()
    .refine(
      (dateStr) => {
        if (!dateStr) return true;
        const today = new Date();
        const birth = new Date(dateStr);
        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();

        return (
          age > 18 ||
          (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
        );
      },
      {
        message: 'Você deve ter pelo menos 18 anos',
      },
    ),
  gender: z
    .nativeEnum(GenderEnumType)
    .optional()
    .refine(
      (val) => val === undefined || Object.values(GenderEnumType).includes(val),
      {
        message: 'Selecione um gênero válido',
      },
    ),
});

type FormValues = z.infer<typeof formSchema>;

function getDefaultValues(data: Partial<FormValues> = {}) {
  return {
    fullName: data.fullName ?? '',
    phone: data.phone ?? '',
    birthDate: data.birthDate ?? '',
    gender: data.gender ?? undefined,
  };
}

export default function Step1() {
  const { nextStep, updateFormData, formData } = useMultiStep();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(formData),
  });

  const { control, handleSubmit } = form;

  function onSubmit(data: FormValues) {
    updateFormData<FormValues>(data);
    nextStep();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nome Completo *</Label>
          <InputRHF
            name="fullName"
            control={control}
            placeholder="Digite seu nome completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <InputRHF
            name="phone"
            type="phone"
            control={control}
            placeholder="(99) 9 9999-9999"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthDate">Data de Nascimento</Label>
          <InputRHF name="birthDate" control={control} type="date" />
        </div>
        <div className="space-y-2">
          <GenderSelectRHF control={control} name="gender" />
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              disabled={true}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
              Anterior
            </Button>
            <Button type="submit" className="flex items-center gap-2">
              Próximo
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
