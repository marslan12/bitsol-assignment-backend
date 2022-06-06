import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

export interface UserDocument extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    address: string;
    role: string;
    phoneNo: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(),
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true 
    },
    phoneNo: { 
        type: String, 
        required: true 
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
