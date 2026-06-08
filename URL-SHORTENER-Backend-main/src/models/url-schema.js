import mongoose, {Schema} from "mongoose";

const urlSchema=new Schema({
    "email": {type: String, required: true,},
    "shortid": {type: String, required: true},
    "bigurl": {type: String}
})


export const UrlModel=mongoose.model("urls", urlSchema);