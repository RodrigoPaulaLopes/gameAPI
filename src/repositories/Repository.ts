import { type EntityTarget, type ObjectLiteral } from 'typeorm'
import { AppDataSource } from '../data-source'

export const repository = (model: EntityTarget<ObjectLiteral>) => {
  return AppDataSource.getRepository(model)
}
