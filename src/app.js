import express from 'express';
import porjectsRoutes from './routes/projects.routes.js';
const app = express();

app.use(porjectsRoutes)

export default app;