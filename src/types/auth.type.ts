export type TLoginRequest = {
  identifier: string
  password: string
}

export type TLoginRespond = {
  accessToken: string
}

export type TRegisterRequest = {
  email: string
  password: string
  username: string
}

export type TRegisterRespond = {
  email: string
  password: string
  username: string
  id: string
  createdAt: string
  updatedAt: string
}
