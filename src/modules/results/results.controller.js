import { makeResultsService } from "../results/results.service.js"

export const makeResultsController = () => {
    const service = makeResultsService()

    const list = async (request, response, next) => {
        try {
            const { sessionId } = request.session;

            const result = await service.get({ sessionId })

            return res.json(result)
        } catch (err) {
            next(err)
        }
    }

    return { list }
}
