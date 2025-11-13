import { Router } from "express";
import { makeQuestionsController } from "../modules/questions/questions.controller.js";

export const questionRouter = () => {
    const router = Router();
    const ctrl = makeQuestionsController();

    router.get("/", ctrl.list);

    return router
}

