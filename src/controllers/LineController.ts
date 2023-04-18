// import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'
import chatBot from '../libs/chatgpt'

const router = express.Router()
// const prisma = new PrismaClient()

router.post('/message', async (_req: Request, res: Response) => {
  const response = await chatBot('こんにちは！')
  res.json({
    message: response,
  })
})

export default router
