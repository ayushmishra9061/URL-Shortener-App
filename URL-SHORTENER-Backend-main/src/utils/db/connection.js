import mongoose from "mongoose";

export function connectToDB(){
    return mongoose.connect(process.env.URL_DB);
}