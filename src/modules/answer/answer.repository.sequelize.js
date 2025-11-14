
import { Answer } from "../../models/Answer.js";
import { Questions } from "../../models/Questions.js";

export const makeAnswerRepoSequelize = () => {
    const upsert = async ({ sessionId, questionId, answer }) => {
        await Answer.upsert(
            { sessionId, questionId, answer },
            { returning: true }
        );

        // Buscar o registro REAL após o upsert
        const answerRecord = await Answer.findOne({
            where: { sessionId, questionId },
            include: [
                {
                    model: Questions,
                    as: 'question',
                    attributes: ['question', 'options']
                }
            ]
        });

        return answerRecord.toJSON();
    };

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
        upsert,
        findById,
        deleteBySession,
        countBySession,
        isSessionComplete,
        findBySession
    }
}