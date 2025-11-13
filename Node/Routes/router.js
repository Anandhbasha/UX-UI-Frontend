import express from 'express'
import { deletes, insert, read, update } from '../Controller/controller.js'

const route = express.Router()

route.get('/',read)

route.post('/insert',insert)

route.put('/edit/:name',update)
route.delete('/delete/:name',deletes)


export default route