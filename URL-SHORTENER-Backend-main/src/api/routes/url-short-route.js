import express from "express"
import { getBigURL, urlShort, getUserUrls } from "../../controllers/short-controller.js";

export const shortRoute=express.Router();
shortRoute.post('/short-url', urlShort)
shortRoute.get('/small/:code', getBigURL);
shortRoute.get('/all-urls/:email', getUserUrls);