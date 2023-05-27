import express from 'express'
import { createUsers } from './user.controller';
const router = express.Router()
router.get("/", createUsers);
export default router