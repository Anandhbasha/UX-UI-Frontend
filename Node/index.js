import express, { Router } from 'express'
import route from './Routes/router.js'
import Database from './Database.js'
import cors from 'cors'

const app = express()

const PORT = 8242
app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:['Content-Type','Authorization']
}))


Database("mongodb://127.0.0.1:27017/Newone")

app.use(route)

app.listen(PORT,()=>{
    console.log(`Port is running Under http://localhost:${PORT}`);
    
})

