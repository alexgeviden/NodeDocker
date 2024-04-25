import pkg from 'sequelize';
const { DataTypes } = pkg;
import { sequelize } from "../database/database.js";

export const Task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    projectid: {
        type: DataTypes.INTEGER
    }
});

export default Task;
