"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock } from "lucide-react"

export default function Step2() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <Lock className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold">Credenciais de Acesso</h3>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail *</Label>
        <Input placeholder="seu@email.com" />
    
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Senha *</Label>
        <Input type="password" placeholder="Mínimo 6 caracteres" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
        <Input type="password" placeholder="Digite novamente" />
      </div>
    </div>
  )
}
