import 'reflect-metadata'
import express from 'express'
import gamesRoute from './routes/gamesRouter'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', gamesRoute)

export { app }
