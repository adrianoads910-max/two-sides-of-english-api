import { HttpError } from "../../utils/httpError.js";
import { makeQuestionsRepoSequelize } from "./questions.repo.sequelize.js";

export const makeQuestionsService = () => {
    const repo = makeQuestionsRepoSequelize();

    // 👉 Controle aqui quantas questões deseja no quiz
    const QUIZ_SIZE = 10;

    const list = async () => {
        const allQuestions = await repo.findAll();

        // Embaralhar array
        const shuffled = allQuestions.sort(() => Math.random() - 0.5);

        // Escolher apenas X
        const selected = shuffled.slice(0, QUIZ_SIZE);

        return selected;
    };

    const get = async ({ id }) => {
        const item = await repo.findById({ id });

        if (!item) {
            throw new HttpError("Question not found", 404, "NOT_FOUND");
        }

        return item;
    };

    return { list, get };
};
