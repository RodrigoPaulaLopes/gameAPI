import 'reflect-metadata'
import express from 'express'
import gamesRoute from './routes/gamesRouter'

import { AppDataSource } from './data-source'
const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', gamesRoute)

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => { console.log(`http://localhost:${PORT}/`) })
}).catch(error => { console.log(error) })
