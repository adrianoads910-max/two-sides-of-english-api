import { HttpError } from "../../utils/httpError.js";
import { makeQuestionsRepoSequelize } from "../questions/questions.repo.sequelize.js";
import { makeAnswerRepoSequelize } from "./answer.repository.sequelize.js";

export const makeAnswerService = () => {
    const answerRepo = makeAnswerRepoSequelize();
    const questionRepo = makeQuestionsRepoSequelize();

    const createOrUpdate = async ({ sessionId, questionId, answer }) => {

        const question = await questionRepo.findById({ id: questionId });

        if (!question) {
            throw new HttpError('Question not found', 400);
        }

        if (!Number.isInteger(answer)) {
            throw new HttpError("Answer must be an integer", 400);
        }

        if (answer < 0 || answer >= question.options.length) {
            throw new HttpError(
                `Invalid answer index: ${answer}. Must be between 0 and ${question.options.length - 1}`,
                400
            );
        }

        return await answerRepo.create({ sessionId, questionId, answer });
    }

    return { createOrUpdate };
}
