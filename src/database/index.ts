import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('database', 'user', 'pass', {
    dialect: 'sqlite',
    host:'../../revents.sqlite'
})