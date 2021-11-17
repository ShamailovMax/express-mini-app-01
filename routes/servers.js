import { Router } from 'express'
import { getAllHandler } from '../controllers/books.js'

const router = Router()

router.get('/api/server', getAllHandler)

export default router
