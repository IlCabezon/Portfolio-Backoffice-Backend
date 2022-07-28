import express from "express";
import morgan from "morgan";

const app = express();

import router from "./routes";

app.use(express.json());
app.use(morgan("dev"));
app.use('/api',router)

app.get ('/ping', (_, res) => {
  res.send('pong');
});

export default app;