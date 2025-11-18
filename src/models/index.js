// src/models/index.js
import { database } from '../config/database.js'
import { env } from '../config/env.js'
import { Answer } from './Answer.js'
import { Questions } from './Questions.js'

const models = { Questions, Answer }

Questions.hasMany(Answer, {
    foreignKey: 'questionId',
    as: 'answers'
})
Answer.belongsTo(Questions, {
    foreignKey: 'questionId',
    as: 'question'
})

if (env.nodeEnv === 'development') {
    database.sync({ alter: true })
        .then(() => console.log('✅ Models synced'))
        .catch(err => console.error('❌ Error when synced:', err))
}
export { database, Questions, Answer }
export default models
