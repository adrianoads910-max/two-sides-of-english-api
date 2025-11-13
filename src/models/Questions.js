import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const Questions = database.define("Question", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    //Adiciona os outros parametros  text: {
    //  type: DataTypes.STRING(200),
    //   allowNull: false,
    //  },
    //  options: {
    //    type: DataTypes.JSON,
    //    allowNull: false,
    // }
}, {

    tableName: 'questions',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
})