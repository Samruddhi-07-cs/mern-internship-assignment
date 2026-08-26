import { Router } from 'express'
import databaseReady from '../middleware/databaseReady.js'
import { getMenuItem, getMenuItems } from '../controllers/menuController.js'

const router = Router()

router.use(databaseReady)
router.get('/', getMenuItems)
router.get('/:id', getMenuItem)

export default router
