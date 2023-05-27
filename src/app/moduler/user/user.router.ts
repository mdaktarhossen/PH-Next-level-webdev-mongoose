import express from 'express'
import { createUsers, getUsers } from './user.controller';
const router = express.Router()
router.get("/", getUsers);
router.post("/posts", createUsers);
export default router