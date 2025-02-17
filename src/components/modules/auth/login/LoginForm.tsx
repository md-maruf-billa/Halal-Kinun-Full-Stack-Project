"use client"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import logo from "@/assets/icons/logo.png"
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '@/services/authService';
import { toast } from 'sonner';
import { logingFormValidation } from './loginFormValidation';

const LoginForm = () => {
      const form = useForm({
            resolver: zodResolver(logingFormValidation)
      })
      const { formState: { isSubmitting } } = form
      const onSubmit: SubmitHandler<FieldValues> = async (data) => {
            try {
                  const res = await loginUser(data)
                  if (res.success) {
                        toast.success(res.message)
                  } else {
                        toast.error(res.message)
                  }
            } catch (error) {
                  toast.error(JSON.stringify(error))
            }
      }
      return (
            <div className=' flex justify-center items-center min-h-screen'>
                  <div className='max-w-md w-full border shadow-lg p-6 rounded-lg'>
                        <div className='flex flex-col items-center justify-center gap-3'>
                              <Image
                                    src={logo}
                                    width={60}
                                    height={60}
                                    alt='Halal kinun'
                              />
                              <h1 className='text-3xl mb-6 font-bold text-customBlack text-center'>Sign In</h1>
                        </div>
                        <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                                    <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel >Enter Email</FormLabel>
                                                      <FormControl>
                                                            <Input type='text' placeholder="Email" {...field} value={field.value || ""} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem>
                                                      <FormLabel >Enter Password</FormLabel>
                                                      <FormControl>
                                                            <Input type='password' placeholder="Password" {...field} value={field.value || ""} />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                    />
                                    <Button type='submit' className='w-full rounded-full'>{isSubmitting ? "Loging....." : "Loging Now"}</Button>
                              </form>
                              <p className='text-customSecondary mt-6 text-center'>Don’t have account?<Link href={"/register"} className='text-customPrimary font-bold hover:underline'>Register</Link></p>
                        </Form>
                  </div>

            </div>
      );
};

export default LoginForm;