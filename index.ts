import app from './src/app';

import colors from 'colors';
colors.enable();

import dotenv from 'dotenv';
dotenv.config();
import './configs/dbConnection';
import config from './configs/config';

app.listen(config.PORT || 4000, () => {
  console.log(`Server running on port ${config.PORT}`.green);
});

export default app;