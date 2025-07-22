'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useMultiStep } from '@/contexts/multi-step-context';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const formSchema = z.object({
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar os termos de uso',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Step3() {
  const { prevStep, updateFormData, formData } = useMultiStep();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      termsAccepted: false,
    },
  });

  const { control, handleSubmit } = form;

  function onSubmit(data: FormValues) {
    updateFormData<FormValues>(data);
    toast.success('Conta cadastrada com sucesso');
    console.log(formData);
  }

  const { fullName, email, phone, birthDate, gender } = formData;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div className="bg-muted p-4 rounded-lg space-y-3">
          <h4 className="font-medium">Resumo:</h4>
          <div className="text-sm text-muted-foreground">
            <p>
              <strong>Nome completo:</strong> {fullName || 'Não informado'}
            </p>
            <p>
              <strong>E-mail:</strong> {email || 'Não informado'}
            </p>
            {phone && (
              <p>
                <strong>Telefone:</strong> {phone}
              </p>
            )}

            {birthDate && (
              <p>
                <strong>Data de Nascimento:</strong>{' '}
                {new Date(birthDate).toLocaleDateString('pt-BR')}
              </p>
            )}

            {gender && (
              <p>
                <strong>Gênero:</strong> {gender}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-2">
          <Controller
            control={control}
            name="termsAccepted"
            render={({ field, fieldState }) => (
              <>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="terms"
                />
                <div className="text-sm leading-relaxed">
                  Eu aceito os{' '}
                  <span className="text-blue-600 underline cursor-pointer">
                    termos de uso
                  </span>{' '}
                  e a{' '}
                  <span className="text-blue-600 underline cursor-pointer">
                    política de privacidade
                  </span>{' '}
                  *
                  {fieldState.error && (
                    <p className="text-red-500 mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
            onClick={prevStep}
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>
          <Button type="submit" className="flex items-center gap-2">
            Criar Conta
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}
