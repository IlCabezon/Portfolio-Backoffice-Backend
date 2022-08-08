import { Router } from 'express'
import { getTechnologies, createOneTechnolgy, createTechnologies } from '../controllers/technologiesController'

const router = Router()

router.get('/', getTechnologies)
router.post('/createTech', createOneTechnolgy)
router.post('/createTechs', createTechnologies)

export default router
