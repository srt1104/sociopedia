import dotenv from "dotenv";
import mongoose from "mongoose";

import { users, posts } from "./data.js";
import User from "../models/User.js";
import Post from "../models/Post.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);

  // SEED DATA ONLY ONCE
  // await User.insertMany(users);
  // await Post.insertMany(posts);
} catch (error) {
  console.log(error);
} finally {
  mongoose.disconnect();
}
