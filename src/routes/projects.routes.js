import {Router} from 'express';
import {createProjects, deleteProjects, getProjects, getProject ,updateProjects , getProjectTasks} from '../controller/projects.controller.js';
const router = Router();

router.get('/projects', getProjects)
router.post('/projects', createProjects)
router.put('/projects/:id', updateProjects)
router.delete('/projects/:id' , deleteProjects)
router.get('/projects/:id' , getProject)
router.get('/projects/:id/tasks' , getProjectTasks)

export default router