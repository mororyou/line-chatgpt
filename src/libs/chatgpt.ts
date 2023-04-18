import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
dotenv.config()

const configration = new Configuration({
  apiKey: process.env.OPENAPI_KEY,
})
const openai = new OpenAIApi(configration)

const chatBot = async (message: string) => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  })
  const resMessage = response.data.choices[0]?.message?.content as string
  return resMessage
}

export default chatBot
