import { Router } from "express"
import { getUsers } from '../controllers/UserController'

const router = Router()

router.get('/getUsers', getUsers)

export default router;