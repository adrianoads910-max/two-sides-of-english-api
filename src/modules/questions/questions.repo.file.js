import { readFile } from "fs/promises";
import { questionsArraySchema } from "./questions.schema.js";

const QUESTIONS_FILE = "./src/data/questions.json";

export const makeQuestionsRepoFile = () => {

    const load = async () => {
        const content = await readFile(QUESTIONS_FILE, "utf8");
        const json = JSON.parse(content);

        // valida tudo com Zod
        return questionsArraySchema.parse(json);
    };

    const findAll = async ({ q }) => {
        const data = await load();

        if (q) {
            return data.filter(item =>
                item.question.toLowerCase().includes(q.toLowerCase())
            );
        }

        return data;
    };

    const findById = async ({ id }) => {
        const data = await load();
        return data.find(q => q.id === Number(id)) || null;
    };

    return { findAll, findById };
};
