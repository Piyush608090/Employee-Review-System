import express from 'express';
import {Auth} from "../config/auth.middleware.js"
import { assignWork,assignReview,submitReview } from '../controller/action.controller.js';
export const router = express.Router();
router.get("/assignwork",Auth,assignWork);
router.post("/assignwork",Auth,assignReview);
router.post("/submit/:id",Auth,submitReview)