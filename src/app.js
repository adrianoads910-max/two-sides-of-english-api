import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import { questionRouter } from "./routes/questions.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const createApp = () => {
    const app = express();


    app.use(express.json());
    app.use(helmet());
    app.use(cors({ origin: env.corsOrigin }));
    app.use(rateLimit({ windowMs: 60_000, max: 100 }));

    app.get("/health", (_, res) => {
        res.json({ ok: true });
    });

    app.use("/questions", questionRouter());
    app.use(errorHandler);

    return app;
};
