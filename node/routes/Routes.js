import express from 'express'
import { GetAllReg, GetOneReg,CreateReg, UpdateReg, DeleteReg} from '../controllers/Controller.js'
const router = express.Router()

router.get('/:id', GetOneReg)
router.get('/', GetAllReg)
router.post('/', CreateReg)
router.put('/:id',UpdateReg)
router.delete('/:id', DeleteReg)

export default router

