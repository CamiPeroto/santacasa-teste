"use client"

import { InputRHF } from "@/components/RHF/inputRHF"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMultiStep } from "@/contexts/multi-step-context"
import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import z from "zod"

const formSchema = z.object({
     email: z.string().email( "Digite um e-mail válido"),
       password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"], 

   })  
type FormValues = z.infer<typeof formSchema>

export default function Step2() {

   const {prevStep,  nextStep, updateFormData} = useMultiStep()
  
      const form = useForm<FormValues>({
          resolver: zodResolver(formSchema),
          defaultValues: {
    email: "",
    password: "",
    confirmPassword: "",
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
        <Label htmlFor="email">E-mail *</Label>
        <InputRHF name="email" control={control} placeholder="email@example.com" required />
    
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha *</Label>
        <InputRHF
    name="password"
    control={control}
    type="password"
    placeholder="Mínimo 8 caracteres"
    required
  />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
         <InputRHF
    name="confirmPassword"
    control={control}
    type="password"
    placeholder="Digite novamente a senha"
    required
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
                  Próximo
                  <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
    </div>
    </form>
  )
}
