import { makeResultsService } from "./results.service.js";

export const makeResultsController = () => {
    const service = makeResultsService();

    const list = async (request, response, next) => {
        try {
            const sessionId = request.sessionId || request.session?.sessionId;

            if (!sessionId) {
                return response.status(400).json({
                    message: "Missing sessionId",
                    code: "BAD_REQUEST",
                });
            }

            const result = await service.listBySession(sessionId);

            return response.json(result);

        } catch (err) {
            next(err);
        }
    };

    return { list };
};
