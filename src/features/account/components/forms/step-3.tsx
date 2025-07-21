"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMultiStep } from "@/contexts/multi-step-context"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "Você deve aceitar os termos de uso",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Step3() {

const {prevStep,  nextStep, updateFormData} = useMultiStep()

const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    termsAccepted: false,
  },
})

   const {control,handleSubmit} = form;
  
  function onSubmit(data: FormValues) {
    updateFormData<FormValues>(data)
    nextStep()
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
    <div className="space-y-6">
      <div className="bg-muted p-4 rounded-lg space-y-3">
        <h4 className="font-medium">Resumo:</h4>
      </div>
      <div className="flex items-start space-x-2">
      <Checkbox />
        <Label className="text-sm leading-relaxed">
          Eu aceito os <a href="#" className="text-blue-600 underline">termos de uso</a> e a <a href="#" className="text-blue-600 underline">política de privacidade</a> *
        </Label>
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
  )
}
