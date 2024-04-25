import express from 'express'
import { signIn,signUp,registerUser,adminView,employeeView,logoutUser } from '../controller/user.controller.js';
import { createSession } from '../config/create.session.js';
export const router = express.Router();
router.get("/",signIn)
router.post("/create-session",createSession)
router.get("/adminview",adminView)
router.get("/emplyeeview",employeeView)
router.get("/signup",signUp)
router.post("/signup",registerUser)
router.get("/logout",logoutUser)
