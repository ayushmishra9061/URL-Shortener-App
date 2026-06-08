import { request, response } from "express";
import { nanoid } from "nanoid";
import { addUrl, getSmallToBig, getUrlsByEmail } from "../services/url-service.js";

export const getBigURL = async (request, response) => {
  const { code } = request.params;
  try {
    const doc = await getSmallToBig(code);
    if (doc && doc._id) {
      response.redirect(doc.bigurl);
    } else {
      response.status(404).json({ message: "Invalid short URL" });
    }
  } catch (err) {
    response.status(500).json({ error: "Internal server error" });
  }
};

export const urlShort = async (request, response) => {
  const bigUrl = request.body.bigurl;
  const email = request.body.email;
  try {
    const num = nanoid(5);
    const doc = await addUrl({
      email: email,
      shortid: num,
      bigurl: bigUrl,
    });
    if (doc && doc._id) {
      response.json({ shortid: num });
    } else {
      response.json({ error: "Something Went Wrong !" });
    }
  } catch (err) {
    response.json({ error: "Something Went Wrong !" });
  }
};



export const getUserUrls = async (request, response) => {
  const { email } = request.params;
  try {
    const urls = await getUrlsByEmail(email);
    if (urls && urls.length > 0) {
      response.json({ urls });
    } else {
      response.json({ message: "No URLs found for this user." });
    }
  } catch (err) {
    response.status(500).json({ error: "Internal Server Error" });
  }
};