'use client';

import { cn } from '@/lib/utils';
import { useMask } from '@react-input/mask';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { InputHTMLAttributes } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface InputRHFProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  control: Control<T>;
  type?: 'text' | 'phone' | 'date' | 'password';
}

export function InputRHF<T extends FieldValues>({
  name,
  control,
  type = 'text',
  className,
  ...props
}: InputRHFProps<T>) {
  const maskPhoneRef = useMask({
    mask: '(__) _ ____-____',
    replacement: { _: /\d/ },
  });

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="space-y-1">
          <div className="relative">
            <input
              {...props}
              type={inputType}
              ref={type === 'phone' ? maskPhoneRef : field.ref}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              className={cn(
                'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                className,
              )}
              aria-invalid={!!fieldState.error}
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
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
