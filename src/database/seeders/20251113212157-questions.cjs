'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      {
        difficulty: "easy",
        question: "What do British people call 'French fries'?",
        options: JSON.stringify(["Biscuits", "Fries", "Chips", "Crisps"]),
        correct_answer: "2",
        points: 10,
        feedback_correct: "Correto! No Reino Unido, 'chips' são batatas fritas grossas, enquanto 'crisps' são as de pacote.",
        feedback_incorrect: "Errado! Em inglês britânico, 'chips' significa batatas fritas (não 'fries').",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "In American English, what does 'apartment' mean in British English?",
        options: JSON.stringify(["Cottage", "Villa", "Flat", "House"]),
        correct_answer: "2",
        points: 10,
        feedback_correct: "Muito bem! 'Flat' é o termo britânico para 'apartment'.",
        feedback_incorrect: "Ops! No Reino Unido, 'apartment' é chamado de 'flat'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "Which of these words means 'elevator' in British English?",
        options: JSON.stringify(["Upstairs", "Lift", "Platform", "Rise"]),
        correct_answer: "1",
        points: 10,
        feedback_correct: "Perfeito! 'Lift' é o equivalente britânico de 'elevator'.",
        feedback_incorrect: "Não foi dessa vez! No inglês britânico, o 'elevator' é chamado de 'lift'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "In British English, 'holiday' means what in American English?",
        options: JSON.stringify(["Festival", "Weekend", "Break", "Vacation"]),
        correct_answer: "3",
        points: 10,
        feedback_correct: "Correto! Os britânicos dizem 'holiday' onde os americanos dizem 'vacation'.",
        feedback_incorrect: "Errado! 'Holiday' em inglês britânico é 'vacation' nos EUA.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "How do Americans say 'petrol'?",
        options: JSON.stringify(["Oil", "Diesel", "Gas", "Fuel"]),
        correct_answer: "2",
        points: 10,
        feedback_correct: "Boa! 'Gas' é o termo americano para 'petrol'.",
        feedback_incorrect: "Errado! Nos EUA, 'petrol' é 'gas'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "What is the British word for 'trash can'?",
        options: JSON.stringify(["Bucket", "Bag", "Bin", "Basket"]),
        correct_answer: "2",
        points: 10,
        feedback_correct: "Acertou! 'Bin' é o termo britânico para lixeira.",
        feedback_incorrect: "Não! Em inglês britânico, o correto é 'bin'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "In the UK, 'football' refers to which sport?",
        options: JSON.stringify(["Cricket", "Soccer", "Basketball", "Rugby"]),
        correct_answer: "1",
        points: 10,
        feedback_correct: "Exato! 'Football' no Reino Unido é o que os americanos chamam de 'soccer'.",
        feedback_incorrect: "Errado! 'Football' na Inglaterra significa 'soccer'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "What do British people call 'cookies'?",
        options: JSON.stringify(["Biscuits", "Crisps", "Cakes", "Buns"]),
        correct_answer: "0",
        points: 10,
        feedback_correct: "Correto! 'Biscuits' no Reino Unido são o que os americanos chamam de 'cookies'.",
        feedback_incorrect: "Errado! Em inglês britânico, o termo é 'biscuits'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "Which of these is the British word for 'truck'?",
        options: JSON.stringify(["Lorry", "Van", "Caravan", "Bus"]),
        correct_answer: "0",
        points: 10,
        feedback_correct: "Muito bem! 'Lorry' é o equivalente britânico de 'truck'.",
        feedback_incorrect: "Não foi dessa vez! Em inglês britânico, 'truck' é 'lorry'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "easy",
        question: "How do Americans say 'jumper'?",
        options: JSON.stringify(["Jacket", "Sweater", "Hoodie", "Vest"]),
        correct_answer: "1",
        points: 10,
        feedback_correct: "Perfeito! 'Jumper' no Reino Unido é 'sweater' nos EUA.",
        feedback_incorrect: "Errado! Nos EUA, 'jumper' é chamado de 'sweater'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What is 'crisps' in American English?",
        options: JSON.stringify(["Chips", "Crackers", "Snacks", "Fries"]),
        correct_answer: "0",
        points: 20,
        feedback_correct: "Boa! Nos EUA, 'crisps' são 'chips'.",
        feedback_incorrect: "Errado! Os britânicos dizem 'crisps' para o que os americanos chamam de 'chips'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "In British English, 'public school' actually means what?",
        options: JSON.stringify(["Private school", "University", "Government school", "College"]),
        correct_answer: "0",
        points: 20,
        feedback_correct: "Certo! Em inglês britânico, 'public school' é uma escola privada de elite.",
        feedback_incorrect: "Errado! No Reino Unido, 'public school' significa escola privada, não pública.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What do Americans call a 'queue'?",
        options: JSON.stringify(["Line", "List", "Column", "Row"]),
        correct_answer: "0",
        points: 20,
        feedback_correct: "Correto! 'Queue' no Reino Unido é 'line' nos EUA.",
        feedback_incorrect: "Errado! Os americanos dizem 'line' em vez de 'queue'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What is 'takeaway' in American English?",
        options: JSON.stringify(["Fast food", "Takeout", "Dine-in", "Delivery"]),
        correct_answer: "1",
        points: 20,
        feedback_correct: "Boa! 'Takeaway' no Reino Unido é 'takeout' nos EUA.",
        feedback_incorrect: "Errado! Os americanos usam 'takeout' em vez de 'takeaway'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What does 'flatmate' mean in American English?",
        options: JSON.stringify(["Roommate", "Neighbor", "Teammate", "Classmate"]),
        correct_answer: "0",
        points: 20,
        feedback_correct: "Acertou! 'Flatmate' e 'roommate' significam colega de quarto.",
        feedback_incorrect: "Errado! O equivalente americano de 'flatmate' é 'roommate'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "How do Americans say 'postman'?",
        options: JSON.stringify(["Messenger", "Delivery guy", "Mailman", "Courier"]),
        correct_answer: "2",
        points: 20,
        feedback_correct: "Certo! 'Mailman' é o equivalente americano de 'postman'.",
        feedback_incorrect: "Errado! Em inglês americano, o termo é 'mailman'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What is 'biscuit' in American English?",
        options: JSON.stringify(["Cake", "Cracker", "Cookie", "Bread roll"]),
        correct_answer: "2",
        points: 20,
        feedback_correct: "Boa! 'Biscuit' no Reino Unido é 'cookie' nos EUA.",
        feedback_incorrect: "Errado! O termo americano para 'biscuit' (britânico) é 'cookie'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "In British English, 'pants' means what in American English?",
        options: JSON.stringify(["Underwear", "Trousers", "Jeans", "Shorts"]),
        correct_answer: "0",
        points: 20,
        feedback_correct: "Correto! Cuidado: 'pants' no Reino Unido significa 'underwear', não 'trousers'.",
        feedback_incorrect: "Errado! No inglês britânico, 'pants' quer dizer 'underwear'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "How do Americans say 'chemist'?",
        options: JSON.stringify(["Hospital", "Clinic", "Pharmacy / Drugstore", "Lab"]),
        correct_answer: "2",
        points: 20,
        feedback_correct: "Certo! 'Chemist' no Reino Unido é 'pharmacy' ou 'drugstore' nos EUA.",
        feedback_incorrect: "Errado! Nos EUA, o termo correto é 'pharmacy' ou 'drugstore'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "medium",
        question: "What is 'lorry driver' in American English?",
        options: JSON.stringify(["Delivery driver", "Bus driver", "Truck driver", "Taxi driver"]),
        correct_answer: "2",
        points: 20,
        feedback_correct: "Boa! 'Lorry driver' é 'truck driver' nos EUA.",
        feedback_incorrect: "Errado! O termo americano é 'truck driver'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What is the American equivalent of 'car park'?",
        options: JSON.stringify(["Garage", "Parking lot", "Driveway", "Rest area"]),
        correct_answer: "1",
        points: 30,
        feedback_correct: "Excelente! 'Car park' no Reino Unido é 'parking lot' nos EUA.",
        feedback_incorrect: "Errado! O termo americano é 'parking lot'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "In the UK, 'boot' refers to which part of a car?",
        options: JSON.stringify(["Bumper", "Tire", "Trunk", "Hood"]),
        correct_answer: "2",
        points: 30,
        feedback_correct: "Acertou! 'Boot' no Reino Unido é 'trunk' nos EUA.",
        feedback_incorrect: "Errado! Em inglês americano, 'boot' é 'trunk'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What is the American word for 'timetable'?",
        options: JSON.stringify(["Agenda", "Schedule", "Calendar", "Planner"]),
        correct_answer: "1",
        points: 30,
        feedback_correct: "Correto! 'Timetable' é o mesmo que 'schedule' em inglês americano.",
        feedback_incorrect: "Errado! O termo americano para 'timetable' é 'schedule'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What does 'caravan' mean in American English?",
        options: JSON.stringify(["Truck", "Bus", "Trailer / RV", "Van"]),
        correct_answer: "2",
        points: 30,
        feedback_correct: "Perfeito! 'Caravan' no Reino Unido é 'trailer' ou 'RV' nos EUA.",
        feedback_incorrect: "Errado! O equivalente americano de 'caravan' é 'trailer' ou 'RV'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What do Americans call a 'mobile phone'?",
        options: JSON.stringify(["Smartphone", "Payphone", "Cell phone", "Telephone"]),
        correct_answer: "2",
        points: 30,
        feedback_correct: "Boa! 'Mobile phone' no Reino Unido é 'cell phone' nos EUA.",
        feedback_incorrect: "Errado! O termo americano correto é 'cell phone'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "In British English, 'biscuit' in the US can also refer to what kind of food?",
        options: JSON.stringify(["Cookie", "Soft bread roll", "Cracker", "Cake"]),
        correct_answer: "1",
        points: 30,
        feedback_correct: "Correto! Nos EUA, 'biscuit' é um tipo de pão macio, não um biscoito.",
        feedback_incorrect: "Errado! Nos EUA, 'biscuit' é um pãozinho salgado e macio.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What is the American equivalent of 'underground' (transport)?",
        options: JSON.stringify(["Subway", "Train", "Bus", "Metro"]),
        correct_answer: "0",
        points: 30,
        feedback_correct: "Certo! 'Underground' no Reino Unido é 'subway' nos EUA.",
        feedback_incorrect: "Errado! Nos EUA, 'underground' é chamado de 'subway'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What is 'nappy' in American English?",
        options: JSON.stringify(["Towel", "Diaper", "Napkin", "Blanket"]),
        correct_answer: "1",
        points: 30,
        feedback_correct: "Boa! 'Nappy' no Reino Unido é 'diaper' nos EUA.",
        feedback_incorrect: "Errado! O termo americano é 'diaper'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What is the American word for 'torch'?",
        options: JSON.stringify(["Lantern", "Flashlight", "Lightbulb", "Lamp"]),
        correct_answer: "1",
        points: 30,
        feedback_correct: "Correto! 'Torch' no Reino Unido é 'flashlight' nos EUA.",
        feedback_incorrect: "Errado! Em inglês americano, 'torch' é 'flashlight'.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        difficulty: "hard",
        question: "What does 'motorway' mean in American English?",
        options: JSON.stringify(["Highway", "Main road", "Expressway", "Freeway"]),
        correct_answer: "0",
        points: 30,
        feedback_correct: "Excelente! 'Motorway' no Reino Unido é 'highway' nos EUA.",
        feedback_incorrect: "Errado! O termo americano é 'highway'.",
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
      , {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
