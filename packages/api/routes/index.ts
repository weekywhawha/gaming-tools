import { Weather } from '../controller/weather'
import express from 'express'
import { Twitch } from '../controller/twitch'
import { Roll } from '../controller/roll'
import { Dual } from '../controller/dual'
import { Tarkov } from '../controller/tarkov'

export const router = express()

router.post('/twitch/', Twitch.info)
router.post('/weather', Weather.info)
router.post('/roll', Roll.info)
router.post('/dual', Dual.info)
router.post('/tarkov/map', Tarkov.map)
router.post('/tarkov/market', Tarkov.market)
router.get('/tarkov/:id', Tarkov.ammo)
