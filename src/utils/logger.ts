import pino from 'pino'
import { createPinoBrowserSend, createWriteStream } from 'pino-logflare'

const stream = createWriteStream({
  apiKey: 'kr3fxfykcMdu',
  sourceToken: '853cf23c-3411-4e0a-8557-be0aece7f85c',
})

const send = createPinoBrowserSend({
  apiKey: 'kr3fxfykcMdu',
  sourceToken: '853cf23c-3411-4e0a-8557-be0aece7f85c',
})

const logger = pino(
  {
    browser: {
      transmit: {
        level: 'info',
        send: send,
      },
    },
    level: 'debug',
    base: {
      env: process.env.NODE_ENV,
    },
  },
  stream,
)
export default logger
