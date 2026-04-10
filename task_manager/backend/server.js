import { app } from "./src/app.js";
import dotenv from "dotenv";
import path from 'path'
dotenv.config({
    path:'./.env'
})
import { connectDatabase } from "./src/database/db.js";
connectDatabase()


app.listen(3000,()=>{
    console.log("Server is live at 3000");
    
})