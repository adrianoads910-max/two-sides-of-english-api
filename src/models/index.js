import { database } from "../config/database.js";
import { env } from "../config/env.js";
import { Questions } from "./Questions.js";

const models = { Questions }

if (env.nodeEnv === 'development') {
    database.sync({ alter: true })
        .then(() => console.log('✅ Models synced'))
        .catch(err => console.error('❌ Error when synced:', err));
}

export { database, Questions };
export default models;