import { Router } from 'express'
import createContactMessage from '../controllers/contactController.js'
import databaseReady from '../middleware/databaseReady.js'

const router = Router()

router.use(databaseReady)
router.post('/', createContactMessage)

export default router
