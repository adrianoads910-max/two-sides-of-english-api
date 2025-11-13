import { HttpError } from "../../utils/httpError.js";
import { makeQuestionsRepoSequelize } from "./questions.repo.sequelize.js";

export const makeQuestionsService = () => {
    const repo = makeQuestionsRepoSequelize();

    const list = async () => {
        return repo.findAll();
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
