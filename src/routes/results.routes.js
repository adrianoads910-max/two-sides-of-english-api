import { Router } from "express";
import { makeResultsController } from "../modules/results/results.controller.js";
import { ensureAuth } from "../middleware/auth.js";


export const resultsRouter = () => {
    const router = Router();
    const ctrl = makeResultsController();

    router.get("/", ensureAuth, ctrl.list);

    return router
}

