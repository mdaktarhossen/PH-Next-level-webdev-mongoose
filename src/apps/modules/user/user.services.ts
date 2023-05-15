import IUser from "./user.interface";
import { User } from "./user.model";

// import User from "./user.model";
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUsersFromToDb = async () => {
  const users = await User.find()
  return users;
};