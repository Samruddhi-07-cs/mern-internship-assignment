import { Router } from 'express'
import getReviews from '../controllers/reviewController.js'
import databaseReady from '../middleware/databaseReady.js'

const router = Router()

router.use(databaseReady)
router.get('/', getReviews)

export default router
