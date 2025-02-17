'use server'

import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
export const registerUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  if (result.success) {
    ;(await cookies()).set('accessToken', result.data.accessToken)
  }
  return result
}

export const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  if (result.success) {
    ;(await cookies()).set('accessToken', result.data.accessToken)
  }
  return result
}

export const getLogeduser = async () => {
  const res = (await cookies()).get('accessToken')?.value
  let decoded = null
  if (res) {
    decoded = await jwtDecode(res)
    return decoded
  } else {
    return null
  }
}
export const reCaptchaTokenVerification = async (token: string) => {
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECHAPTCHA_SECRET!,
        response: token
      })
    })

    return res.json()
  } catch (err: any) {
    return Error(err)
  }
}
