import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      required: [true, "createdBy is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      min: [3, "Title cant be less than 3 characters"],
      max: [50, "Title cant be more than 50 characters"],
    },
    body: {
      type: String,
      required: [true, "Body is required"],
      min: [3, "Body cant be less than 3 characters"],
    },
    img: {
      type: String,
      default: "https://wmmedia.sgp1.cdn.digitaloceanspaces.com/blog.png",
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

const Post =
  mongoose.models.Post || mongoose.model("Post", postSchema, "posts");

export default Post;
