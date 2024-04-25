import {Task} from '../models/task.js'
// Obtener todas las tareas
export const getTasks = async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Obtener una tarea específica por ID
  export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      res.json(task);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Crear una nueva tarea
  export const createTask = async (req, res) => {
    const { name, done, projectid } = req.body;
    try {
      const newTask = await Task.create({
        name,
        done,
        projectid
      });
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Actualizar una tarea existente por ID
  export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, done, projectid } = req.body;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      await task.update({
        name,
        done,
        projectid
      });
      res.json(task);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Eliminar una tarea existente por ID
  export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }
      await task.destroy();
      res.json({ message: 'Tarea eliminada correctamente' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };