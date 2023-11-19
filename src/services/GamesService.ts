import { type GameDTO } from '../dto/CreateGameDTO'
import { Games } from '../entity/Game'
import { repository } from '../repositories/Repository'
const gameRepository = repository(Games)
const gamesService = {
  findAll: async (): Promise<GameDTO[]> => {
    return await gameRepository.find() as GameDTO[]
  },
  find: async (id: string): Promise<GameDTO | undefined> => {
    return await gameRepository.findOne({ where: { id } }) as GameDTO
  },
  save: async (body: GameDTO) => {
    return await gameRepository.save(body)
  },
  update: async (body: GameDTO) => {
    return await gameRepository.update(body.id, body)
  },
  remove: async (id: string) => {
    const game = await gameRepository.findOne({ where: { id } })
    return await gameRepository.remove(game)
  }
}

export default gamesService
