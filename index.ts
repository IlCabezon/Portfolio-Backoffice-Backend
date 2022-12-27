import app from './src/app'

import colors from 'colors'

import dotenv from 'dotenv'
import './configs/dbConnection'
import config from './configs/config'
colors.enable()
dotenv.config()

app.listen(config.PORT || '4000', () => {
  console.log(`Server running on port ${config.PORT}`.green)
})

export default app
