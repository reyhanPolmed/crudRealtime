import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Users = db.define('user',{
    name: DataTypes.STRING,
    price: DataTypes.STRING
},{
    freezeTableName: true
})

export default Users;
