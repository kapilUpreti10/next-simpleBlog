import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id is required"],
  },
  username: {
    type: String,
    required: [true, " Username is required"],
    unique: [true, "Username already exists"],
    min: [3, "Username cant be less than 3 characters"],
    max: [20, "username cant be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    max: [50, "Email cant be more than 50 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [6, "Password cant be less than 6 characters"],
  },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg",
  },
});

const User =
  mongoose.models.User || mongoose.model("User", userSchema, "users");
//console.log(mongoose, mongoose.models);
export default User;
