import { Weather } from '../controller/weather'
import express from 'express'
import { Twitch } from '../controller/twitch'

export const router = express()

router.post('/twitch/', Twitch.info)
router.post('/weather', Weather.info)
