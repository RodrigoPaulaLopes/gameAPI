import express, { type Router } from 'express'

import { gamesController } from '../controllers/GamesController'

const gamesRoute: Router = express.Router()

gamesRoute.get('/games', gamesController.findAll)
gamesRoute.get('/games/:id', gamesController.find)
gamesRoute.post('/games', gamesController.create)

export default gamesRoute
