import { Schema, model } from "mongoose"
import { Iuser } from "./user.interface"

const userSchema = new Schema<Iuser>({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  family: {
    name: {
      type: String
    },
    age: {
      type: String
    }
  }
})

export const userModel = model<Iuser>("userModel", userSchema)

