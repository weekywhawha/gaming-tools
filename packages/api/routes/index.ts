import express from 'express'
//import { getTwitchInfo } from '@gaming-tools/libraries'
import { Twitch } from '../controller/twitch'

export const router = express()

router.get('/twitch/:id', Twitch.info)