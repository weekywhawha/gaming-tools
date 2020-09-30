import express from 'express'
require('dotenv').config()
import { router } from './routes/index'
import {errorHandler} from './error/error-handler'
//import { getTwitchInfo } from '@gaming-tools/libraries'

const port = process.env.PORT



const app = express()

app.use('/', router)





app.use(errorHandler)





// app.get('/api/twitch/:id', async (req, res) => {
//     res.send(await getTwitchInfo(req.params.id))
//     next(err)
// })

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something went wrong.')
// })

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
