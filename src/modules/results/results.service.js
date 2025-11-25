import { makeAnswerRepoSequelize } from "../answer/answer.repository.sequelize.js"

export const makeResultsService = () => {
    const answerRepo = makeAnswerRepoSequelize()

    const get = async ({ sessionId }) => {
        const answers = await answerRepo.findBySession(sessionId)

        if (!answers || answers.length === 0) {
            return {
                totalQuestions: 0,
                correct: 0,
                percentage: 0
            }
        }

        const totalQuestions = answers.length

        // verificar corretas
        const correct = answers.filter(a => {
            return a.answer === a.question.correctAnswer
        }).length

        // calcular porcentagem
        const percentage = Math.round((correct / totalQuestions) * 100)

        return {
            totalQuestions,
            correct,
            percentage
        }
    }

    return { get }
}
