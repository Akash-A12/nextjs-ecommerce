// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "mongoose";
import clientPromise from "../../../lib/mongodb";
import { Product } from "../../../model/product";
import mongooseConnect from "../../../lib/mongoose";

export default async function handler(req, res) {
  const {method} = req;
  await mongooseConnect();
  mongoose.Promise = clientPromise;
  if(method === 'POST') {
    const {title, description, price} = req.body;
   const productDoc = await Product.create({
      title, description, price
    })
    res.json(productDoc)
  }


  if(method === 'GET') {
    res.json(await Product.find());
  }

}
