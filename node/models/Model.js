import DB from "../DB/DB.js";
import { DataTypes } from "sequelize";

const Model = DB.define('todolist',
{
    titulo: {type: DataTypes.STRING },
    contenido: {type: DataTypes.STRING },
})

export default Model