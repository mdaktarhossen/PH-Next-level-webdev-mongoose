import { User } from "./user.model";

// import User from "./user.model";
export const createUserToDb = async () => {
  const user = await new User({
    id: "14578",
    Role: "Student",
    password: "string",
    name: {
      firstName: "akterhs",
      lastName: "Hosen",
    },
    dateOfBirth: "hhh",
    gender: "mail",
    email: "ajjs@gmail",
    contsctNmbr: "01798466491",
    emergiencyNmbr: "ysgg",
    presendAdrs: "jshhs",
    permanandAddress: "jajjs",
  });
  await user.save();
  return user;
};
// export const getUsersToDb = async () => {
//   const users = await User.find()
//   return users;
// };