import express from 'express'
import { deletes, insert, read, update } from '../Controller/controller.js'
import { loginUser, registerUser, verifyToken } from '../Controller/loginResiterController.js'

const route = express.Router()

route.get('/',read)

route.post('/insert',insert)

route.put('/edit/:name',update)
route.delete('/delete/:name',deletes)


route.post('/register',registerUser)
route.post('/login',loginUser)


route.get('/validate',verifyToken,read)

export default route