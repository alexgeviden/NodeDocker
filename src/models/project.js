import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";
import task from './task.js';



export const Project = sequelize.define('projects' , {

    id: {type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
    name : {
        type: DataTypes.STRING
},
    priority : {
    type: DataTypes.INTEGER
},
    description : {
        type: DataTypes.STRING
}
})
//Muchas tareas , Muchos proyectos

Project.hasMany(task, {
    foreignKey: 'projectid',
    sourceKey: 'id'
})



task.belongsTo(Project, {
    foreignKey: 'projectid',
    targetId: 'id'
})