import mongoose from "mongoose";

export default function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const Uri = process.env.MONGODB_URI();
    return mongoose.connect(Uri);
  }
}
