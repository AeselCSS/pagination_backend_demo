import express from 'express';
import { getAllEmployees, getEmployeeById } from '../controllers/employee.controller.js';
const employeeRouter = express.Router();

employeeRouter.route('/employees')
    .get(getAllEmployees)

employeeRouter.route('/employees/:id')
    .get(getEmployeeById)


export default employeeRouter;