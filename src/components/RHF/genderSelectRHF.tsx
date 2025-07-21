'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { GenderEnumType } from '@/enums/gender';
import { Control, Controller } from 'react-hook-form';

type GenderSelectProps = {
  control: Control<any>;
  name: string;
};

export function GenderSelectRHF({ control, name }: GenderSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="space-y-1">
          <Label htmlFor={name}>Gênero</Label>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger
              className={`border-input bg-transparent h-9 rounded-md px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
              ${fieldState.error ? 'border-destructive ring-destructive/40' : ''}`}
            >
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="rounded-md py-1 text-sm">
              <SelectItem value={GenderEnumType.Masculino}>
                Masculino
              </SelectItem>
              <SelectItem value={GenderEnumType.Feminino}>Feminino</SelectItem>
              <SelectItem value={GenderEnumType.Outro}>Outro</SelectItem>
              <SelectItem value={GenderEnumType.PrefiroNaoInformar}>
                Prefiro Não Informar
              </SelectItem>
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-sm text-destructive">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
