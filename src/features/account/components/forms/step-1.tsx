"use client"

import { InputRHF } from "@/components/RHF/inputRHF"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useMultiStep } from "@/contexts/multi-step-context"
import { GenderEnumType } from "@/enums/gender"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import z from "zod"


const formSchema = z.object({
  fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z.string().regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, "Telefone inválido"),
  birthDate: z
    .string()
    .min(1, "Data de nascimento obrigatória")
    .refine((dateStr) => {
      const today = new Date()
      const birth = new Date(dateStr)
      const age = today.getFullYear() - birth.getFullYear()
      const monthDiff = today.getMonth() - birth.getMonth()
      const dayDiff = today.getDate() - birth.getDate()

      if (
        age > 18 ||
        (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
      ) {
        return true
      }

      return false
    }, {
      message: "Você deve ter pelo menos 18 anos",
    }),
  gender: z.nativeEnum(GenderEnumType, {
    message: "Selecione um gênero válido",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Step1() {

    const {nextStep, updateFormData} = useMultiStep()

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            birthDate: "",
            gender: undefined,
        },
    })

    const {control,handleSubmit} = form;

function onSubmit(data: FormValues) {
  updateFormData<FormValues>(data)
  nextStep()
}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Nome Completo *</Label>
        <InputRHF name="fullName" control={control} placeholder="Digite seu nome completo" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <InputRHF name="phone" type="phone" control={control} placeholder="(99) 9 9999-9999" />
     </div>
      <div className="space-y-2">
        <Label htmlFor="birthDate">Data de Nascimento</Label>
        <InputRHF name="birthDate" control={control} type="date" />
      </div>
      <div className="space-y-2">
        <Label>Gênero</Label>
        <Controller
          control={control}
          name="gender"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Masculino">Masculino</SelectItem>
                <SelectItem value="Feminino">Feminino</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
                <SelectItem value="Prefiro Não Informar">Prefiro não informar</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
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
  )
}
