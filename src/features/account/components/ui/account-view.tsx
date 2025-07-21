'use client'
import { MultiStepForm } from "@/components/multi-step-form";
import { MultiStepProvider, Step } from "@/contexts/multi-step-context";
import Step1 from "../forms/step-1";
import Step2 from "../forms/step-2";
import Step3 from "../forms/step-3";


const stepsData: Step[] = [
    {
        id: 1,
        title: "Informações Pessoais",
        description: "Vamos começar com seus dados principais"
    },
    {
        id: 2,
                title: "Informações Pessoais",
        description: "Vamos começar com seus dados principais"
    },
     {
        id: 3,
                title: "Informações Pessoais",
        description: "Vamos começar com seus dados principais"
    },
]

export default function CreateIngredientComponent() {
    return (
        <div className="@container/main">
            <MultiStepProvider initialSteps={stepsData}>
                <MultiStepForm>
                    <Step1 />
                    <Step2 />
                    <Step3 />
                </MultiStepForm>
            </MultiStepProvider>
        </div>
    )
}