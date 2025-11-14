import { z } from 'zod';

export const answerSchemas = {
    createOrUpdate: z.object({
        questionId: z.number().int().positive('Invalid question ID'),
        answer: z.number().int().positive("Invalid answer ID"),
    }),

};