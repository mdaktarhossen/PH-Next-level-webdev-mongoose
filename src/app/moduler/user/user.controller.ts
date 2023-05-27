import { NextFunction, Request, Response } from "express";
import { createUsersToDb, getUsersToDb } from "./user.services";

export const createUsers = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  const user = await createUsersToDb(data);
  res.status(200).json({
    status: "wow success",
    data: user,
  })
}
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUsersToDb();
  res.status(200).json({
    status: "wow success",
    data: user,
  })
}