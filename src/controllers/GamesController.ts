import { type Request, type Response } from 'express'
import gamesService from '../services/GamesService'

export const gamesController = {
  findAll: async (req: Request, res: Response) => {
    const games = await gamesService.findAll()
    res.status(200).json({ body: games })
  },
  find: async (req: Request, res: Response) => {
    const { id } = req.params
    res.status(200).json({ body: await gamesService.find(id) })
  },
  create: async (req: Request, res: Response) => {
    const { body } = req
    const savedBook = await gamesService.save(body)
    res.status(201).json({ body: savedBook })
  },
  update: async (req: Request, res: Response) => {
    const { body } = req
    const updatedBook = await gamesService.update(body)
    res.status(200).json({ body: updatedBook })
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params
    const deleted = await gamesService.remove(id)
    res.status(204).json({ body: deleted })
  }
}
