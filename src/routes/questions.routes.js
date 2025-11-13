import { Router } from "express";
import { makeQuestionsService } from "../modules/questions/questions.service.js";


const router = Router();
const service = makeQuestionsService();

router.get("/", async (req, res, next) => {
    try {
        const questions = await service.list({ q: req.query.q });
        res.json(questions);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const question = await service.get({ id: req.params.id });
        res.json(question);
    } catch (err) {
        next(err);
    }
});

export default router;
