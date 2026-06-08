import { UrlModel } from "../models/url-schema.js";


export const getSmallToBig=async (code)=>{
    const doc= await UrlModel.findOne({shortid:code}).exec();
    return doc;
}

export const addUrl=async (urlObject)=>{
    try{
        const doc=await UrlModel.create(urlObject);
        return doc;
    }catch(err){
        throw err;
    }
}

export const getUrlsByEmail = async (email) => {
  try {
    const docs = await UrlModel.find({ email }).exec();
    return docs;
  } catch (err) {
    throw err;
  }
};
