import { Iuser } from "./user.interface"
import { userModel } from "./user.model"

export const createUsersToDb = async (payload: Iuser): Promise<Iuser> => {
  const user = new userModel(payload)
  user.save()
  return user
}
// ------
export const getUsersToDb = async () => {
  const users = await userModel.find()
  return users
}
