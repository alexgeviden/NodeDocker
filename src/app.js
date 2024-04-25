import express from 'express';
import porjectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/task.route.js'

const app = express();
// Middlewares
app.use(express.json());


app.use(porjectsRoutes);
app.use(tasksRoutes);

export default app;