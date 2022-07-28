export interface CacheConnection {
  connected: boolean;
  dbName: string;
}

export interface ResponseType {
  message: string;
  data?: Array;
  err?: any | unknown;
}

export interface Technologies {
  name: string;
}
