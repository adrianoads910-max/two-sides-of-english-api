import { Answer } from "../../models/Answer.js";
import { Questions } from "../../models/Questions.js";

export const makeAnswerRepoSequelize = () => {
    const create = async ({ sessionId, questionId, answer }) => {
        // 1. Primeiro verificamos se já existe uma resposta para esta sessão e pergunta
        const existingAnswer = await Answer.findOne({
            where: { sessionId, questionId }
        });

        let targetId;

        if (existingAnswer) {
            // Se já existe, ATUALIZAMOS a resposta
            await existingAnswer.update({ answer });
            targetId = existingAnswer.id;
        } else {
            // Se não existe, CRIAMOS uma nova
            const newAnswer = await Answer.create({ sessionId, questionId, answer });
            targetId = newAnswer.id;
        }

        // 2. Buscamos o registro completo com as associações (Lógica original mantida)
        const answerRecord = await Answer.findByPk(targetId, {
            include: [
                {
                    model: Questions,
                    as: 'question',
                    // CORREÇÃO: Havia um erro de digitação em 'feddback_incorret' -> 'feedback_incorrect'
                    // Verifique se no banco está escrito 'incorrect' ou 'incorret' mesmo.
                    attributes: ['feedback_correct', 'feedback_incorrect']
                }
            ]
        })
        return answerRecord ? answerRecord.toJSON() : null
    }

    // ... O restante do arquivo (findBySession, findById, etc) permanece igual
    const findBySession = async (sessionId) => {
        // ... (seu código original aqui)
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
        // ... (seu código original aqui)
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
        // Atenção: Certifique-se que o model 'Question' está importado ou use 'Questions'
        const totalQuestions = await Questions.count();
        const answeredQuestions = await countBySession(sessionId);

        return {
            total: totalQuestions,
            answered: answeredQuestions,
            isComplete: answeredQuestions >= totalQuestions,
            percentage: totalQuestions === 0 ? 0 : Math.round((answeredQuestions / totalQuestions) * 100)
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