import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import connectDatabase from './config/database.js'
import contactRoutes from './routes/contactRoutes.js'
import healthRoutes from './routes/healthRoutes.js'
import menuRoutes from './routes/menuRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT) || 5000
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://127.0.0.1:5173'

app.use(cors({ origin: clientOrigin }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_request, response) => {
  response.json({ name: 'Aapla Swaad API', status: 'running' })
})

app.use('/api/health', healthRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/contact', contactRoutes)
app.use(notFound)
app.use(errorHandler)

async function startServer() {
  await connectDatabase()

  const server = app.listen(port, () => {
    console.log(`Aapla Swaad API listening on port ${port}`)
  })

  const shutdown = async (signal) => {
    console.log(`${signal} received. Closing server.`)
    server.close(async () => {
      await mongoose.disconnect()
      process.exit(0)
    })
  }

  process.once('SIGINT', () => shutdown('SIGINT'))
  process.once('SIGTERM', () => shutdown('SIGTERM'))
}

startServer().catch((error) => {
  console.error(`Server startup failed: ${error.message}`)
  process.exit(1)
})
