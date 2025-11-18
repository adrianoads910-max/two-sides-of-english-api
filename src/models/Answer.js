import { DataTypes } from 'sequelize';
import { database } from '../config/database.js';

export const Answer = database.define('Answer', {
    id: {
        type: DataTypes.UUID, // Mude para UUID
        defaultValue: DataTypes.UUIDV4, // Adicione o gerador de UUID v4
        primaryKey: true,
        allowNull: false, // Garante que não será nulo
        unique: true // Garante a unicidade (primaryKey já implica isso, mas é bom ser explícito)
    },
    sessionId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'session_id'
    },
    questionId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'question_id',
        references: {
            model: 'questions',
            key: 'id'
        }
    },
    answer: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
}, {
    tableName: 'answers',
    timestamps: true,
    indexes: [
        { fields: ['session_id'] },
        { fields: ['question_id'] },
        { fields: ['session_id', 'question_id'], unique: true }
    ]
});