import {Sequelize} from 'sequelize'

const DB = new Sequelize('Todolist','Oliver','@FCBarcelona21',{host:'localhost', dialect: 'mysql'})

export default DB