export type TUser = {
  _id: string
  name: string
  email: string
  password: string
  role: string
  hasShop: boolean
  isActive: boolean
  otpToken: string | null
  lastLogin: string
  createdAt: string
  updatedAt: string
}
