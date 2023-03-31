// import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express'

const router = express.Router()
// const prisma = new PrismaClient()

router.get('/messages', async (_req: Request, res: Response) => {
  res.json({
    message: 'messages',
  })
})

export default router
