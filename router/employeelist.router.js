import express from 'express';
import {Auth} from "../config/auth.middleware.js"
import { employeeSection,deleteEmployee,updateEmployee,makeAdmin } from '../controller/employeelist.controller.js';
export const router = express.Router();
router.get("/employeelist",Auth,employeeSection);
router.get("/employee/delete/:id",Auth,deleteEmployee)
router.post("/employee/update/:id",Auth,updateEmployee)
router.get("/employee/permission/:id",Auth,makeAdmin)