"use client"

import type React from "react"

import { useMultiStep } from "@/contexts/multi-step-context"
import { Card, CardContent } from "./ui/card"
import { StepIndicator } from "./ui/step-indicator"

interface MultiStepFormProps {
    children: React.ReactNode[]
}

export function MultiStepForm({ children }: MultiStepFormProps) {
    const { currentStep, steps, currentDescription, currentStepTitle } = useMultiStep()

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl px-4">
                <StepIndicator steps={steps} title={"Criar Nova Conta"}  currentStep={currentStep}  currentStepTitle={currentStepTitle}  description={currentDescription} />
                <CardContent>
                {children[currentStep]}
                </CardContent>
            </Card>
        </div>
    )
}