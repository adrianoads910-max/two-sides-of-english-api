
import { Answer } from "../../models/Answer.js";
import { Questions } from "../../models/Questions.js";

export const makeAnswerRepoSequelize = () => {
    const create = async ({ sessionId, questionId, answer }) => {
        // Use create para sempre gerar um novo registro
        const newAnswer = await Answer.create({ sessionId, questionId, answer })

        // Buscar o registro REAL após a criação para incluir a questão
        const answerRecord = await Answer.findByPk(newAnswer.id, {
            include: [
                {
                    model: Questions,
                    as: 'question',
                    attributes: ['id', 'question', 'options', 'feedback_corret', 'feddback_incorret'] // Use 'question' se esse for o nome da coluna no model Questions
                }
            ]
        })
        return answerRecord ? answerRecord.toJSON() : null
    }

    const findBySession = async (sessionId) => {
        const answers = await Answer.findAll({
            where: { sessionId },
            include: [
                {
                    model: Questions,
                    as: 'question',
                    attributes: ['id', 'text', 'options']
                }
            ],
        });

        return answers.map(a => a.toJSON());
    }

    const findById = async (id) => {
        const answer = await Answer.findByPk(id, {
            include: [
                {
                    model: Questions,
                    as: 'question',
                    attributes: ['id', 'text', 'options']
                }
            ]
        });

        return answer ? answer.toJSON() : null;
    }

    const deleteBySession = async (sessionId) => {
        return await Answer.destroy({ where: { sessionId } });
    }

    const countBySession = async (sessionId) => {
        return await Answer.count({ where: { sessionId } });
    }

    const isSessionComplete = async (sessionId) => {
        const totalQuestions = await Question.count();
        const answeredQuestions = await countBySession(sessionId);

        return {
            total: totalQuestions,
            answered: answeredQuestions,
            isComplete: answeredQuestions >= totalQuestions,
            percentage: Math.round((answeredQuestions / totalQuestions) * 100)
        };
    }

    return {
        create,
        findById,
        deleteBySession,
        countBySession,
        isSessionComplete,
        findBySession
    }
}