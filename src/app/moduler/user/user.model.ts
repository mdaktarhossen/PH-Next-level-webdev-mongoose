import { Schema, model } from "mongoose"
import { Iuser } from "./user.interface"

const userSchema = new Schema<Iuser>({
  name: {
    type: String,
  },
  id: {
    type: String,
  }
})

export const userModel = model<Iuser>("userModel", userSchema)