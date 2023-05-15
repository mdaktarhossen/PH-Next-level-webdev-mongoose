import { Schema, model } from "mongoose";
import IUser from "./user.interface";
// creating schema using interface
const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  Role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    }
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["mail", "femail"],
  },

  email: {
    type: String,
    required: true,
  },
  contsctNmbr: {
    type: String,
    required: true,
  },
  emergiencyNmbr: {
    type: String,
    required: true,
  },
  presendAdrs: {
    type: String,
    required: true,
  },
  permanandAddress: {
    type: String,
    required: true,
  },
});
// create model
export const User = model<IUser>("User", userSchema);