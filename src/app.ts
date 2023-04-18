import express, { Application } from 'express'
import LineController from './controllers/LineController'

const app: Application = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/api/v1', LineController)

export default app
