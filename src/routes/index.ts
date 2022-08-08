import { Router } from 'express'
import TechnologiesRouter from './technologiesRouter'

const router = Router()

router.use('/technologies', TechnologiesRouter)

export default router
