import { Iuser } from "./user.interface"
import { userModel } from "./user.model"

export const createUsersToDb = () => {
  const user = new userModel({
    name: "aktaer",
    id: "12"
  })
  user.save()
  console.log(user)
}