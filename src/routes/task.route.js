import { Router } from 'express';
import { createTask, deleteTask, getTasks, getTask, updateTask } from '../controller/task.controller.js';

const router = Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/:id', getTask);

export default router;
