"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { UserCheck } from "lucide-react"

export default function Step3() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <UserCheck className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Finalizar Cadastro</h3>
      </div>
      <div className="bg-muted p-4 rounded-lg space-y-3">
        <h4 className="font-medium">Resumo:</h4>
      </div>
      <div className="flex items-start space-x-2">
      <Checkbox />
        <Label className="text-sm leading-relaxed">
          Eu aceito os <a href="#" className="text-blue-600 underline">termos de uso</a> e a <a href="#" className="text-blue-600 underline">política de privacidade</a> *
        </Label>
      </div>
 </div>
  )
}
