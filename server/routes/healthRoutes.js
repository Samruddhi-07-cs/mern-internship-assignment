import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.get('/', (_request, response) => {
  response.json({
    status: mongoose.connection.readyState === 1 ? 'ok' : 'degraded',
    service: 'aapla-swaad-api',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'unavailable',
    timestamp: new Date().toISOString(),
  })
})

export default router
