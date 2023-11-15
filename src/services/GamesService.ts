import { log } from 'console'
import { type Games } from '../entity/Game'
import { gameRepository } from '../repositories/GameRepository'
import TGames from '../types/Games'

const gamesService = {
  findAll: async (): Promise<Games[]> => {
    return await gameRepository.find()
  },
  find: async (id: string): Promise<Games | undefined> => {
    return await gameRepository.findOne({ where: { id } })
  },
  save: async (body: TGames) => {
    return await gameRepository.save(body)
  }
}

export default gamesService
