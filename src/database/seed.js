// src/database/seed.js

import { database } from '../config/database.js'
import { Questions } from '../models/Questions.js'

const questionsData = [
    {
        difficulty: 'easy',
        question: 'What do British people call \'French fries\'?',
        options: ['Biscuits', 'Fries', 'Chips', 'Crisps'],
        correctAnswer: 2,
        points: 10,
        feedbackCorrect: 'Correto! No Reino Unido, \'chips\' são batatas fritas grossas, enquanto \'crisps\' são as de pacote.',
        feedbackIncorrect: 'Errado! Em inglês britânico, \'chips\' significa batatas fritas (não \'fries\').',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'In American English, what does \'apartment\' mean in British English?',
        options: ['Cottage', 'Villa', 'Flat', 'House'],
        correctAnswer: 2,
        points: 10,
        feedbackCorrect: 'Muito bem! \'Flat\' é o termo britânico para \'apartment\'.',
        feedbackIncorrect: 'Ops! No Reino Unido, \'apartment\' é chamado de \'flat\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'Which of these words means \'elevator\' in British English?',
        options: ['Upstairs', 'Lift', 'Platform', 'Rise'],
        correctAnswer: 1,
        points: 10,
        feedbackCorrect: 'Perfeito! \'Lift\' é o equivalente britânico de \'elevator\'.',
        feedbackIncorrect: 'Não foi dessa vez! No inglês britânico, o \'elevator\' é chamado de \'lift\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'In British English, \'holiday\' means what in American English?',
        options: ['Festival', 'Weekend', 'Break', 'Vacation'],
        correctAnswer: 3,
        points: 10,
        feedbackCorrect: 'Correto! Os britânicos dizem \'holiday\' onde os americanos dizem \'vacation\'.',
        feedbackIncorrect: 'Errado! \'Holiday\' em inglês britânico é \'vacation\' nos EUA.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'How do Americans say \'petrol\'?',
        options: ['Oil', 'Diesel', 'Gas', 'Fuel'],
        correctAnswer: 2,
        points: 10,
        feedbackCorrect: 'Boa! \'Gas\' é o termo americano para \'petrol\'.',
        feedbackIncorrect: 'Errado! Nos EUA, \'petrol\' é \'gas\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'What is the British word for \'trash can\'?',
        options: ['Bucket', 'Bag', 'Bin', 'Basket'],
        correctAnswer: 2,
        points: 10,
        feedbackCorrect: 'Acertou! \'Bin\' é o termo britânico para lixeira.',
        feedbackIncorrect: 'Não! Em inglês britânico, o correto é \'bin\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'In the UK, \'football\' refers to which sport?',
        options: ['Cricket', 'Soccer', 'Basketball', 'Rugby'],
        correctAnswer: 1,
        points: 10,
        feedbackCorrect: 'Exato! \'Football\' no Reino Unido é o que os americanos chamam de \'soccer\'.',
        feedbackIncorrect: 'Errado! \'Football\' na Inglaterra significa \'soccer\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'What do British people call \'cookies\'?',
        options: ['Biscuits', 'Crisps', 'Cakes', 'Buns'],
        correctAnswer: 0,
        points: 10,
        feedbackCorrect: 'Correto! \'Biscuits\' no Reino Unido são o que os americanos chamam de \'cookies\'.',
        feedbackIncorrect: 'Errado! Em inglês britânico, o termo é \'biscuits\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'Which of these is the British word for \'truck\'?',
        options: ['Lorry', 'Van', 'Caravan', 'Bus'],
        correctAnswer: 0,
        points: 10,
        feedbackCorrect: 'Muito bem! \'Lorry\' é o equivalente britânico de \'truck\'.',
        feedbackIncorrect: 'Não foi dessa vez! Em inglês britânico, \'truck\' é \'lorry\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'easy',
        question: 'How do Americans say \'jumper\'?',
        options: ['Jacket', 'Sweater', 'Hoodie', 'Vest'],
        correctAnswer: 1,
        points: 10,
        feedbackCorrect: 'Perfeito! \'Jumper\' no Reino Unido é \'sweater\' nos EUA.',
        feedbackIncorrect: 'Errado! Nos EUA, \'jumper\' é chamado de \'sweater\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What is \'crisps\' in American English?',
        options: ['Chips', 'Crackers', 'Snacks', 'Fries'],
        correctAnswer: 0,
        points: 20,
        feedbackCorrect: 'Boa! Nos EUA, \'crisps\' são \'chips\'.',
        feedbackIncorrect: 'Errado! Os britânicos dizem \'crisps\' para o que os americanos chamam de \'chips\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'In British English, \'public school\' actually means what?',
        options: ['Private school', 'University', 'Government school', 'College'],
        correctAnswer: 0,
        points: 20,
        feedbackCorrect: 'Certo! Em inglês britânico, \'public school\' é uma escola privada de elite.',
        feedbackIncorrect: 'Errado! No Reino Unido, \'public school\' significa escola privada, não pública.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What do Americans call a \'queue\'?',
        options: ['Line', 'List', 'Column', 'Row'],
        correctAnswer: 0,
        points: 20,
        feedbackCorrect: 'Correto! \'Queue\' no Reino Unido é \'line\' nos EUA.',
        feedbackIncorrect: 'Errado! Os americanos dizem \'line\' em vez de \'queue\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What is \'takeaway\' in American English?',
        options: ['Fast food', 'Takeout', 'Dine-in', 'Delivery'],
        correctAnswer: 1,
        points: 20,
        feedbackCorrect: 'Boa! \'Takeaway\' no Reino Unido é \'takeout\' nos EUA.',
        feedbackIncorrect: 'Errado! Os americanos usam \'takeout\' em vez de \'takeaway\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What does \'flatmate\' mean in American English?',
        options: ['Roommate', 'Neighbor', 'Teammate', 'Classmate'],
        correctAnswer: 0,
        points: 20,
        feedbackCorrect: 'Acertou! \'Flatmate\' e \'roommate\' significam colega de quarto.',
        feedbackIncorrect: 'Errado! O equivalente americano de \'flatmate\' é \'roommate\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'How do Americans say \'postman\'?',
        options: ['Messenger', 'Delivery guy', 'Mailman', 'Courier'],
        correctAnswer: 2,
        points: 20,
        feedbackCorrect: 'Certo! \'Mailman\' é o equivalente americano de \'postman\'.',
        feedbackIncorrect: 'Errado! Em inglês americano, o termo é \'mailman\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What is \'biscuit\' in American English?',
        options: ['Cake', 'Cracker', 'Cookie', 'Bread roll'],
        correctAnswer: 2,
        points: 20,
        feedbackCorrect: 'Boa! \'Biscuit\' no Reino Unido é \'cookie\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano para \'biscuit\' (britânico) é \'cookie\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'In British English, \'pants\' means what in American English?',
        options: ['Underwear', 'Trousers', 'Jeans', 'Shorts'],
        correctAnswer: 0,
        points: 20,
        feedbackCorrect: 'Correto! Cuidado: \'pants\' no Reino Unido significa \'underwear\', não \'trousers\'.',
        feedbackIncorrect: 'Errado! No inglês britânico, \'pants\' quer dizer \'underwear\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'How do Americans say \'chemist\'?',
        options: ['Hospital', 'Clinic', 'Pharmacy / Drugstore', 'Lab'],
        correctAnswer: 2,
        points: 20,
        feedbackCorrect: 'Certo! \'Chemist\' no Reino Unido é \'pharmacy\' ou \'drugstore\' nos EUA.',
        feedbackIncorrect: 'Errado! Nos EUA, o termo correto é \'pharmacy\' ou \'drugstore\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'medium',
        question: 'What is \'lorry driver\' in American English?',
        options: ['Delivery driver', 'Bus driver', 'Truck driver', 'Taxi driver'],
        correctAnswer: 2,
        points: 20,
        feedbackCorrect: 'Boa! \'Lorry driver\' é \'truck driver\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano é \'truck driver\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What is the American equivalent of \'car park\'?',
        options: ['Garage', 'Parking lot', 'Driveway', 'Rest area'],
        correctAnswer: 1,
        points: 30,
        feedbackCorrect: 'Excelente! \'Car park\' no Reino Unido é \'parking lot\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano é \'parking lot\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'In the UK, \'boot\' refers to which part of a car?',
        options: ['Bumper', 'Tire', 'Trunk', 'Hood'],
        correctAnswer: 2,
        points: 30,
        feedbackCorrect: 'Acertou! \'Boot\' no Reino Unido é \'trunk\' nos EUA.',
        feedbackIncorrect: 'Errado! Em inglês americano, \'boot\' é \'trunk\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What is the American word for \'timetable\'?',
        options: ['Agenda', 'Schedule', 'Calendar', 'Planner'],
        correctAnswer: 1,
        points: 30,
        feedbackCorrect: 'Correto! \'Timetable\' é o mesmo que \'schedule\' em inglês americano.',
        feedbackIncorrect: 'Errado! O termo americano para \'timetable\' é \'schedule\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What does \'caravan\' mean in American English?',
        options: ['Truck', 'Bus', 'Trailer / RV', 'Van'],
        correctAnswer: 2,
        points: 30,
        feedbackCorrect: 'Perfeito! \'Caravan\' no Reino Unido é \'trailer\' ou \'RV\' nos EUA.',
        feedbackIncorrect: 'Errado! O equivalente americano de \'caravan\' é \'trailer\' ou \'RV\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What do Americans call a \'mobile phone\'?',
        options: ['Smartphone', 'Payphone', 'Cell phone', 'Telephone'],
        correctAnswer: 2,
        points: 30,
        feedbackCorrect: 'Boa! \'Mobile phone\' no Reino Unido é \'cell phone\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano correto é \'cell phone\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'In British English, \'biscuit\' in the US can also refer to what kind of food?',
        options: ['Cookie', 'Soft bread roll', 'Cracker', 'Cake'],
        correctAnswer: 1,
        points: 30,
        feedbackCorrect: 'Correto! Nos EUA, \'biscuit\' é um tipo de pão macio, não um biscoito.',
        feedbackIncorrect: 'Errado! Nos EUA, \'biscuit\' é um pãozinho salgado e macio.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What is the American equivalent of \'underground\' (transport)?',
        options: ['Subway', 'Train', 'Bus', 'Metro'],
        correctAnswer: 0,
        points: 30,
        feedbackCorrect: 'Certo! \'Underground\' no Reino Unido é \'subway\' nos EUA.',
        feedbackIncorrect: 'Errado! Nos EUA, \'underground\' é chamado de \'subway\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What is \'nappy\' in American English?',
        options: ['Towel', 'Diaper', 'Napkin', 'Blanket'],
        correctAnswer: 1,
        points: 30,
        feedbackCorrect: 'Boa! \'Nappy\' no Reino Unido é \'diaper\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano é \'diaper\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What is the American word for \'torch\'?',
        options: ['Lantern', 'Flashlight', 'Lightbulb', 'Lamp'],
        correctAnswer: 1,
        points: 30,
        feedbackCorrect: 'Correto! \'Torch\' no Reino Unido é \'flashlight\' nos EUA.',
        feedbackIncorrect: 'Errado! Em inglês americano, \'torch\' é \'flashlight\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        difficulty: 'hard',
        question: 'What does \'motorway\' mean in American English?',
        options: ['Highway', 'Main road', 'Expressway', 'Freeway'],
        correctAnswer: 0,
        points: 30,
        feedbackCorrect: 'Excelente! \'Motorway\' no Reino Unido é \'highway\' nos EUA.',
        feedbackIncorrect: 'Errado! O termo americano é \'highway\'.',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

async function seedDatabase() {
    try {
        // 1. Conectar ao banco de dados
        await database.authenticate()
        console.log('✅ Database connection established successfully.')

        // 2. Sincronizar os modelos (criar/atualizar tabelas)
        // Isso é importante para garantir que as tabelas existam antes de inserir dados
        // e que o ID seja gerado automaticamente (UUID ou autoIncrement)
        await database.sync({ alter: true })
        console.log('✅ Models synced successfully.')

        // 3. Limpar dados existentes (opcional, mas recomendado para seeders)
        // Isso evita duplicatas se você rodar o script várias vezes
        await Questions.destroy({ truncate: true, restartIdentity: true }) // restartIdentity para resetar autoIncrement
        console.log('✅ Existing questions cleared.')

        // 4. Inserir os novos dados
        await Questions.bulkCreate(questionsData, {
            // ignoreDuplicates: true // Pode ser útil se você não quer apagar tudo
        })
        console.log('✅ Questions seeded successfully!')

        // 5. Fechar a conexão com o banco de dados
        await database.close()
        console.log('✅ Database connection closed.')
    } catch (error) {
        console.error('❌ Error during seeding process:', error)
        // Certifique-se de fechar a conexão mesmo em caso de erro
        if (database.connectionManager.hasOwnProperty('connections')) {
            await database.close()
        }
        process.exit(1) // Sair com código de erro
    }
}

// Executar o script de seed
seedDatabase()
