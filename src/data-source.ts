import { DataSource } from 'typeorm'
import { Games } from './entity/Game'
import { config } from 'dotenv'

config({
  path: './.env'
})

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: 'root',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Games],
  migrations: [],
  subscribers: []
  
})
