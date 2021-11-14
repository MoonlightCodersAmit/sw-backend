import express from "express";
const router = express.Router();

import { register, login, getUsers } from "../controllers/user.controller.js";
import {
  addTask,
  getTasks,
  deleteTask,
} from "../controllers/task.controller.js";

//USER
router.post("/register", register);
router.get("/register", getUsers);
router.post("/login", login);

router.post("/addTask", addTask);
router.post("/getTasks", getTasks);
router.post("/deleteTask", deleteTask);

export default router;
