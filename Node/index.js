import express, { Router } from 'express'
import route from './Routes/router.js'

const app = express()

const PORT = 8242
app.use(express.json())

app.use(route)

app.listen(PORT,()=>{
    console.log(`Port is running Under http://localhost:${PORT}`);
    
})

