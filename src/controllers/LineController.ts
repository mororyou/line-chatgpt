// import { PrismaClient } from '@prisma/client'
import { Client } from '@line/bot-sdk'
import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import chatBot from '../libs/chatgpt'

const router = express.Router()
// const prisma = new PrismaClient()

dotenv.config()

const config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN_API as string,
  channelSecret: process.env.LINE_CHANNEL_SECRET as string,
}

const client = new Client(config)

router.post('/webhook', async (req: Request, res: Response) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((error) => {
      console.error(error)
      res.status(500).end()
    })
})

const handleEvent = async (event: any) => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }

  const response: string = await chatBot(event.message.text)

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: response,
  })
}

export default router
