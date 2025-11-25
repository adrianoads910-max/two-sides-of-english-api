import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { questionRouter } from "./routes/questions.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { authRouter } from "./routes/auth.routes.js";
import { answerRouter } from "./routes/answer.routes.js";
import { resultsRouter } from "./routes/results.routes.js";

export const createApp = () => {
    const app = express();

    // middlewares
    app.use(express.json());
    app.use(helmet());
    app.use(cors({ origin: env.corsOrigin })); //restringe 
    app.use(rateLimit({ windowMs: 60_000, max: 100 }));

    //heathcheck
    app.get("/health", (_, res) => {
        res.json({ ok: true });
    });

    //routes
    app.use("/auth", authRouter());
    app.use("/questions", questionRouter());
    app.use("/answer", answerRouter());
    app.use("/results", resultsRouter());


    // tratamento de erros
    app.use(errorHandler);

    return app;
};
