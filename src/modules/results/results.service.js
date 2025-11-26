// src/modules/results/results.service.js

import { Answer } from "../../models/Answer.js";
import { Questions } from "../../models/Questions.js";

export const makeResultsService = () => {
    const listBySession = async (sessionId) => {

        // 1. Busca todas as respostas dessa sessão
        const answers = await Answer.findAll({
            where: { sessionId },
            include: [
                {
                    model: Questions,
                    as: "question",
                    attributes: ["id", "correctAnswer"]
                }
            ]
        });

        if (!answers || answers.length === 0) {
            return {
                totalQuestions: 0,
                correct: 0,
                percentage: 0,
            };
        }

        // 2. Número total de questões respondidas
        const totalQuestions = answers.length;

        // 3. Conta quantas estão corretas
        const correct = answers.filter(
            (item) => item.answer === item.question.correctAnswer
        ).length;

        // 4. Calcula percentual
        const percentage = Math.round((correct / totalQuestions) * 100);

        return {
            totalQuestions,
            correct,
            percentage,
        };
    };

    return { listBySession };
};
