import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const Questions = database.define("Question", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    difficulty: {
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    question: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    options: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    feedback_correct: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    feedback_incorrect: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
}, {

    tableName: 'questions',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
})