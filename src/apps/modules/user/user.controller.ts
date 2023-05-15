import { NextFunction, Request, Response, response } from "express";
import { createUserToDb } from "./user.services";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = await createUserToDb();
  res.status(200).json({
    status: "SuccessFull",
    data: user
  })
};

// export const getUser = async (req: Request, res: Response, next: NextFunction) => {
//   const user = await getUsersToDb();
//   res.status(200).json({
//     status: "SuccessFull",
//     data: user
//   })

// }

// Route -> Controllar -> Services