import { GenderEnumType } from '@/enums/gender';
import { z } from 'zod';

export default function getAccountSchema(){
  return z.object({
     fullName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
     email: z.string().email("E-mail inválido"),
     password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
     phone: z.string().regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, "Telefone inválido"),
     birthDate: z.string().min(1, "Data de nascimento obrigatória"),
     gender: z.nativeEnum(GenderEnumType, {
      message: 'Selecione um gênero válido',
    }),
     terms: z.literal(true, { message: "Você deve aceitar os termos." }),
   }).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})  
}


export default function getAccountSchema(){
  return 
}
