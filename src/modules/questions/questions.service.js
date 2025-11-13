import { HttpError } from "../../utils/httpError.js";
import { makeQuestionsRepoFile } from "./questions.repo.file.js";

export const makeQuestionsService = () => {
    const repo = makeQuestionsRepoFile();

    const list = async ({ q }) => {
        return repo.findAll({ q });
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
