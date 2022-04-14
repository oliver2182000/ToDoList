import express from "express";
import cors from 'cors'
import DB from "./DB/DB.js"
import RegRoutes from './routes/Routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/todolist', RegRoutes)
try {

    await DB.authenticate()
    console.log('Conection successful')
    
} catch (error) {
    console.log(`Error: ${error}`)
}

app.listen(7000, () => {console.log('Server UP running in http://localhost:7000/')})