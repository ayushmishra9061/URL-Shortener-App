import express from 'express'
import { userRoutes } from './src/api/routes/user-routes.js';
import { error404 } from './src/utils/middleware/404.js';
import { connectToDB } from './src/utils/db/connection.js';
import dotenv from 'dotenv'
import cors from "cors"
import { shortRoute } from './src/api/routes/url-short-route.js';


const app=express();
app.use(cors());
const port=1234;

dotenv.config();
app.use(express.json());
app.use('/', userRoutes);
app.use('/', shortRoute);
app.use(error404);

const promise=connectToDB();
promise.then(result=>{
        console.log("DB Connection Created SuccessFully");
        const server=app.listen(port, err=>{
        if(err){
            console.log("Server Crash", err);
        }else{
            console.log("Server Up and Running", port);
        }
    })
}).catch(err=>{
    console.log("DB Connection Fails", err);
})

