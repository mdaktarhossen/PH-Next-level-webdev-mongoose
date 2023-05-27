import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouter from "./app/moduler/user/user.router"
export const APP: Application = express();
APP.use(cors());
APP.use("/api/vi/user", userRouter)