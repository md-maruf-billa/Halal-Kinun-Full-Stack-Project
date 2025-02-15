import { z } from 'zod'

export const registerFormValidation = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Name must be 2 letter')
    .max(30, 'Name must be less 30 letter'),
  email: z
    .string({ required_error: 'Email is requierd' })
    .email('Envalid email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must 6 letter')
    .max(32, 'Password must less 32 letter')
})
