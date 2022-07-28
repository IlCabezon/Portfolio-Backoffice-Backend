interface config {
  PORT: string;
  MONGO_URI: string;
}

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI
} as config;
