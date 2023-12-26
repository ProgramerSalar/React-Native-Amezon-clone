import express from "express"
import {config} from "dotenv"


export const app = express()
config({
    path:"./data/.env"
})






// Routes 
import user from "./routes/user.js"



app.use('/ProgramerSalar/api/user', user)