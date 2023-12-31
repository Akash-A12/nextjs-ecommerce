// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "mongoose";
import clientPromise from "../../../lib/mongodb";
import { Product } from "../../../model/product";
import mongooseConnect from "../../../lib/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  mongoose.Promise = clientPromise;
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }

  if (method === "GET") {
    if (req?.query?.editProductId) {
      res.json(await Product.findOne({ _id: req?.query?.editProductId }));
    } else {
      res.json(await Product.find());
    }
    res.json(await Product.find());
  }

  if (method === "DELETE") {
    if (req?.query?.editProductId) {
      await Product.deleteOne({ _id: req?.query?.editProductId });
      res.json(true);
    }
  }
}
