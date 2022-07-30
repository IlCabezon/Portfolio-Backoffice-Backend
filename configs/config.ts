interface config {
  PORT: string
  MONGO_URI: string
}

const env: config = {
  PORT: typeof process.env.PORT === 'string' ? process.env.PORT : '',
  MONGO_URI: typeof process.env.MONGO_URI === 'string' ? process.env.MONGO_URI : ''
}

export default env
