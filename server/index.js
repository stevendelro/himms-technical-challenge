import { fileURLToPath } from 'url'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

import reportsRoute from './routes/reportsRoute.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// EXPRESS SETUP
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

// API ENTRY POINT
app.use('/reports', reportsRoute)

// CONNECT MONGOOSE
const MONGO_USER = 'admin'
const MONGO_PASSWORD = 'betterpassword'
const MONGO_SRV = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.qo777.mongodb.net/reports?retryWrites=true&w=majority`
mongoose
  .connect(MONGO_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MONGODB CONNECTED'))
  .catch(error => console.error('ERROR IN CONNECTING TO MONGODB: ', error))

// SERVE APP FROM WEBPACK
app.use('/build', express.static(path.resolve(__dirname, '../client/build')))
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, '../client/public/index.html'))
})

// EXPRESS GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error('GLOBAL ERROR OCCURED: ', err)
  const defaultError = {
    message: 'Global error handler triggered',
    status: 400,
    error: { err: 'A error occured processing your request' },
  }
  const withError = { ...defaultError, ...err }
  return res.status(400).send(withError.error)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
