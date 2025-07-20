"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Lock, User, UserCheck } from "lucide-react"
import { useState } from "react"

export default function MultiStepForm () {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
    gender: "",
    acceptTerms: false,
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <User className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Informações Pessoais</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Nome Completo *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Lock className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Credenciais de Acesso</h3>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Mínimo 8 caracteres"
                required
              />
              <p className="text-sm text-muted-foreground">A senha deve ter pelo menos 8 caracteres</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                placeholder="Digite a senha novamente"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gênero</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                    <SelectItem value="nao-informar">Prefiro não informar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <UserCheck className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold">Finalizar Cadastro</h3>
            </div>
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <h4 className="font-medium">Resumo dos seus dados:</h4>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Nome:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>E-mail:</strong> {formData.email}
                </p>
                {formData.phone && (
                  <p>
                    <strong>Telefone:</strong> {formData.phone}
                  </p>
                )}
                {formData.birthDate && (
                  <p>
                    <strong>Data de Nascimento:</strong> {formData.birthDate}
                  </p>
                )}
                {formData.gender && (
                  <p>
                    <strong>Gênero:</strong> {formData.gender}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                Eu aceito os{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  termos de uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  política de privacidade
                </a>
                *
              </Label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Criar Conta</CardTitle>
          <CardDescription className="text-center">
            Passo {currentStep} de {totalSteps}
          </CardDescription>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {renderStep()}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button type="button" onClick={handleNext} className="flex items-center gap-2">
                  Próximo
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={!formData.acceptTerms} className="flex items-center gap-2">
                  Criar Conta
                  <UserCheck className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
