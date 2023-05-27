import { NextFunction, Request, Response } from "express";
import { createUsersToDb } from "./user.services";

export const createUsers = (req: Request, res: Response, next: NextFunction) => {
  const user = createUsersToDb();
  res.status(200).json({
    status: "wow success",
    data: user,
  })
}