import express, { type Router } from 'express'

import { gamesController } from '../controllers/GamesController'

const gamesRoute: Router = express.Router()

gamesRoute.get('/games', gamesController.findAll)
gamesRoute.get('/games/:id', gamesController.find)
gamesRoute.post('/games', gamesController.create)
gamesRoute.put('/games', gamesController.update)
gamesRoute.delete('/games/:id', gamesController.remove)

export default gamesRoute
