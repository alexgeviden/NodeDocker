import Sequelize from 'sequelize'
export const sequelize = new Sequelize('pruebas' , 'postgres' , 'onmula',{
host: 'localhost',
dialect: 'postgres'
});