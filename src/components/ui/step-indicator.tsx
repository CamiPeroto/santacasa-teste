// components/step-indicator.tsx
"use client"

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Step } from "@/contexts/multi-step-context"

type StepIndicatorProps = {
    title: string;
    steps: Step[]
    currentStep: number
}

export function StepIndicator({ steps, currentStep, title}: StepIndicatorProps) {
  const progress = (currentStep + 1 / steps.length) * 100

  return (
    <CardHeader>
      <CardTitle className="text-2xl text-center">{title}</CardTitle>
      <CardDescription className="text-center">
        Passo {currentStep + 1} de {steps.length}
      </CardDescription>
      <Progress value={progress} className="mt-4" />
  {/* TODO: implementar descriçaõ e title do step aqui */}
    </CardHeader>
  )
}
