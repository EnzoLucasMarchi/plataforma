import { Router } from "express";
import { createUser, getAll } from "../controllers/users.controller.js"

const router = Router()

router.get("/", getAll)
router.post("/", createUser)

export default router