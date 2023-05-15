import { NextFunction, Request, Response, response } from "express";
import { createUserToDb, getUsersFromToDb } from "./user.services";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({
    status: "SuccessFull",
    data: user
  })
};


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const user = await getUsersFromToDb();
  res.status(200).json({
    status: "SuccessFull",
    data: user
  })
};

// Route -> Controllar -> Services