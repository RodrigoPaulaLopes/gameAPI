
import { AppDataSource } from '../data-source'
import { Games } from '../entity/Game'

export const gameRepository = AppDataSource.getRepository(Games)
