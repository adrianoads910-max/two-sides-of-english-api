import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

export const Questions = database.define("Questions", {
    id: {
        type: DataTypes.UUID, // Mude para UUID
        defaultValue: DataTypes.UUIDV4, // Adicione o gerador de UUID v4
        primaryKey: true,
        allowNull: false, // Garante que não será nulo
        unique: true // Garante a unicidade (primaryKey já implica isso, mas é bom ser explícito)
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
    correctAnswer: {
        type: DataTypes.INTEGER, //STRING 
        allowNull: false,
        field: "correct_answer"
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    feedbackCorrect: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: "feedback_correct"
    },
    feedbackIncorrect: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: "feedback_incorrect"
    }
}, {
    tableName: 'questions',
    timestamps: true, // Adiciona createdAt e updatedAt
    underscored: true // Usa snake_case no banco (created_at)
})