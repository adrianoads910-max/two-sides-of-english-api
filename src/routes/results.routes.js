import { Router } from "express";
import { makeResultsController } from "../modules/results/results.controller.js";


export const resultsRouter = () => {
    const router = Router();
    const ctrl = makeResultsController();

    router.get("/", ctrl.list);

    return router
}

