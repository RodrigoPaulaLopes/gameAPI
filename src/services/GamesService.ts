import { log } from 'console'
import { type Games } from '../entity/Game'
import { gameRepository } from '../repositories/GameRepository'
import type TGames from '../types/Games'

const gamesService = {
  findAll: async (): Promise<Games[]> => {
    return await gameRepository.find()
  },
  find: async (id: string): Promise<Games | undefined> => {
    return await gameRepository.findOne({ where: { id } })
  },
  save: async (body: TGames) => {
    return await gameRepository.save(body)
  },
  update: async (body: TGames) => {
    return await gameRepository.update(body.id, body)
  },
  remove: async (id: string) => {
    const game = await gameRepository.findOne({ where: { id } })
    return await gameRepository.remove(game)
  }
}

export default gamesService
