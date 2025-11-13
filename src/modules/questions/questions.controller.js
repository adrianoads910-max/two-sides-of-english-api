import { makeQuestionsService } from "./questions.service.js"

export const makeQuestionsController = () => {
    const service = makeQuestionsService()

    const list = async (_request, response, next) => {
        try {
            const questions = await service.list();
            response.json(questions);
        } catch (error) {
            next(error);
        }
    }


    return { list }
}