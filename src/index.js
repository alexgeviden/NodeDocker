import app from './app.js';
import { sequelize } from './database/database.js';
import './models/project.js'
import './models/task.js'

async function main(){
    try {
        await sequelize.sync({force: false})
        app.listen(3000);
        console.log("Server Activo en puerto : 3000")}
     catch (error) {
        console.error("No se pudo conectar a la base de datos", error)
    }}


main();