// components/step-indicator.tsx
"use client"

import { CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Step } from "@/contexts/multi-step-context"

type StepIndicatorProps = {
    title: string;
    currentStepTitle: string;
    description: string;
    steps: Step[];
    currentStep: number;
}

export function StepIndicator({ steps, currentStep, title, currentStepTitle, description}: StepIndicatorProps) {
  const progress = (currentStep + 1 / steps.length) * 100

  return (
    <CardHeader>
      <CardTitle className="text-2xl text-center">{title}</CardTitle>
      <CardDescription className="text-center">
        Passo {currentStep + 1} de {steps.length}
      </CardDescription>
      <div className="flex justify-center mt-4">
      <Progress value={progress}  />
      </div>
       <h3 className="text-lg text-center font-semibold mt-2">{currentStepTitle}</h3>
      <div className="flex justify-center">
      <CardFooter className="text-base text-gray-600">{description}</CardFooter>
      </div>
    </CardHeader>
  )
}
