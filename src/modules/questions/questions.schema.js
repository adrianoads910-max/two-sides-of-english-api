import { z } from "zod";

export const questionSchema = z.object({
  id: z.number().int().positive(),
  difficulty: z.string(),
  question: z.string(),
  options: z.array(z.string()),
  correct_answer: z.string(),
  points: z.number().int().nonnegative(),
  feedback_correct: z.string().optional(),
  feedback_incorrect: z.string().optional()
});

export const questionsArraySchema = z.array(questionSchema);
