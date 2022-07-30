import { Response } from 'express'

export type ResponseRoutes = Promise<Response<ResponseType>>

export interface CacheConnection {
  connected: boolean
  dbName: string
}

export interface ResponseType {
  message: string
  data?: any[]
  err?: any | unknown
}

export interface Technologies {
  name: string
}
