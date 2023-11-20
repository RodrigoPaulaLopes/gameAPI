import { type Request, type Response } from 'express'
import gamesService from '../services/GamesService'

export const gamesController = {
  findAll: async (req: Request, res: Response) => {
    const games = await gamesService.findAll()
    res.status(200).json({ content: games })
  },
  find: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const game = await gamesService.find(id)
      console.log(game);
      
      if (game === null) {
        res.status(400).json({ content: 'Game não encontrado!' })
      }

      res.status(200).json({ content: game })
    } catch (error) {
      console.log(error)
    }
  },
  create: async (req: Request, res: Response) => {
    const { body } = req
    const savedBook = await gamesService.save(body)
    res.status(201).json({ content: savedBook })
  },
  update: async (req: Request, res: Response) => {
    const { body } = req
    const updatedBook = await gamesService.update(body)
    res.status(200).json({ content: updatedBook })
  },
  remove: async (req: Request, res: Response) => {
    const { id } = req.params
    const deleted = await gamesService.remove(id)
    res.status(204).json({ content: deleted })
  }
}
