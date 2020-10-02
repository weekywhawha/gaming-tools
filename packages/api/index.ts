require('dotenv').config()
import express from 'express'
import { router } from './routes/index'
import { errorHandler } from './error/api-error-handler'

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use('/', router)

app.use(errorHandler)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
