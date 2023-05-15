import express, { Application } from "express";
import cors from "cors"
import userRouter from "./apps/modules/user/user.routes";

const app: Application = express()
app.use(cors())
// parse Data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRouter);

export default app;

/*
 1/ interface
 2/schema
 3/Model
 4/data quary
 */

// patteren MVC & Moduler;
// MODULER;
/* 
interface -> interface.ts 
scema, model -> model.ts
route
route funcation -> controller.ts
database quary funcation -> services
*/