import { makeAuthService } from "./auth.service.js"

export const makeAuthController = () => {
    const service = makeAuthService()

    const create = (_request, response, next) => {
        try {
            const { accessToken, sessionId } = service.createSession()

            return response.status(201).json({
                accessToken,
                sessionId
            })
        } catch (error) {
            return next(error)
        }
    }

    return { create }
}
