import {Project} from '../models/project.js'
import Task from '../models/task.js'

export const getProjects = async (req , res) => {
    
 try {
       const projects = await Project.findAll()
       res.json(projects)
 } catch (error) {
    return res.status(500).json({message: error.message})
 }
}

export const createProjects = async (req , res) => {
try {
        const {name , priority , description} = req.body
        const newProject = await Project.create({
            name,
            priority,
            description
        })
        
        res.json(newProject);
} catch (error) {
    return res.status(500).json({message: error.message})
}
}

export const updateProjects = async (req , res) => {
try {
        const {id} = req.params
        const {name , priority , description} = req.body
        const project = await Project.findByPk(id)
        project.name = name
        project.priority = priority
        project.description = description
        await project.save()
        
        res.json(project)
} catch (error) {
    return res.status(500).json({message: error.message})
}
};

export const deleteProjects = async (req , res) => {
try {
        const {id} = req.params
        await Project.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
} catch (error) {
    return res.status(500).json({message: error.message})
}

}
export const getProject = async (req , res) => {
    const {id} = req.params
    try {
        const project = await Project.findOne({
            where: {
                id,
            }
        })
        res.json(project)
        
} catch (error) {
    return res.status(500).json({message: error.message})
}


}
export const getProjectTasks = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar las tareas del proyecto
        const tasks = await Task.findAll({
            where: {
                projectid: id
            }
        });

        // Buscar los datos del proyecto
        const project = await Project.findOne({
            where: {
                id: id
            }
        });

        // Combinar las tareas y los datos del proyecto en un objeto
        const projectWithTasks = {
            project: project,
            tasks: tasks
        };

        // Enviar la respuesta con los datos del proyecto y las tareas
        res.json(projectWithTasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};