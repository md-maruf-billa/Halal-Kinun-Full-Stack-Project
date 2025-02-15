'use server'

import { FieldValues } from 'react-hook-form'

export const registerUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json()
}
