import { dbConnect } from "./connect";
import User from "@/lib/user.model";
import Post from "@/lib/post.model";

export const getUser = async (id) => {
  try {
    dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Error in getting user");
  }
};
export const getPost = async (slug) => {
  try {
    dbConnect();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Error in getting post");
  }
};
export const getPosts = async () => {
  try {
    dbConnect();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Error in getting posts");
  }
};
