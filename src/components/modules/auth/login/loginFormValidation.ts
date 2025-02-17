import { z } from 'zod'

export const logingFormValidation = z.object({
  email: z
    .string({ required_error: 'Email is requierd' })
    .email('Envalid email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must 6 letter')
    .max(32, 'Password must less 32 letter')
})
