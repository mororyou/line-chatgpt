import express, { Application } from 'express'
import LineController from './controllers/LineController'

const app: Application = express()

app.use('/api/v1', LineController)

export default app
