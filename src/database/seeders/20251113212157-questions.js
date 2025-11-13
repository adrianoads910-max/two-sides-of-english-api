'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Question', [
      {
        difficulty: "easy",
        question: "What do British people call 'French fries'?",
        options: ["Chips", "Crisps", "Fries", "Biscuits"],
        correctAnswer: "Chips",
        points: 10,
        feedbackCorrect: "Correto! No Reino Unido, 'chips' são batatas fritas grossas, enquanto 'crisps' são as de pacote.",
        feedbackIncorrect: "Errado! Em inglês britânico, 'chips' significa batatas fritas (não 'fries')."
      },
      {
        difficulty: "easy",
        question: "In American English, what does 'apartment' mean in British English?",
        options: ["Flat", "House", "Cottage", "Villa"],
        correctAnswer: "Flat",
        points: 10,
        feedbackCorrect: "Muito bem! 'Flat' é o termo britânico para 'apartment'.",
        feedbackIncorrect: "Ops! No Reino Unido, 'apartment' é chamado de 'flat'."
      },
      {
        difficulty: "easy",
        question: "Which of these words means 'elevator' in British English?",
        options: ["Lift", "Rise", "Upstairs", "Platform"],
        correctAnswer: "Lift",
        points: 10,
        feedbackCorrect: "Perfeito! 'Lift' é o equivalente britânico de 'elevator'.",
        feedbackIncorrect: "Não foi dessa vez! No inglês britânico, o 'elevator' é chamado de 'lift'."
      },
      {
        difficulty: "easy",
        question: "In British English, 'holiday' means what in American English?",
        options: ["Vacation", "Festival", "Weekend", "Break"],
        correctAnswer: "Vacation",
        points: 10,
        feedbackCorrect: "Correto! Os britânicos dizem 'holiday' onde os americanos dizem 'vacation'.",
        feedbackIncorrect: "Errado! 'Holiday' em inglês britânico é 'vacation' nos EUA."
      },
      {
        difficulty: "easy",
        question: "How do Americans say 'petrol'?",
        options: ["Gas", "Oil", "Fuel", "Diesel"],
        correctAnswer: "Gas",
        points: 10,
        feedbackCorrect: "Boa! 'Gas' é o termo americano para 'petrol'.",
        feedbackIncorrect: "Errado! Nos EUA, 'petrol' é 'gas'."
      },
      {
        difficulty: "easy",
        question: "What is the British word for 'trash can'?",
        options: ["Bin", "Basket", "Bucket", "Bag"],
        correctAnswer: "Bin",
        points: 10,
        feedbackCorrect: "Acertou! 'Bin' é o termo britânico para lixeira.",
        feedbackIncorrect: "Não! Em inglês britânico, o correto é 'bin'."
      },
      {
        difficulty: "easy",
        question: "In the UK, 'football' refers to which sport?",
        options: ["Soccer", "Basketball", "Rugby", "Cricket"],
        correctAnswer: "Soccer",
        points: 10,
        feedbackCorrect: "Exato! 'Football' no Reino Unido é o que os americanos chamam de 'soccer'.",
        feedbackIncorrect: "Errado! 'Football' na Inglaterra significa 'soccer'."
      },
      {
        difficulty: "easy",
        question: "What do British people call 'cookies'?",
        options: ["Biscuits", "Cakes", "Buns", "Crisps"],
        correctAnswer: "Biscuits",
        points: 10,
        feedbackCorrect: "Correto! 'Biscuits' no Reino Unido são o que os americanos chamam de 'cookies'.",
        feedbackIncorrect: "Errado! Em inglês britânico, o termo é 'biscuits'."
      },
      {
        difficulty: "easy",
        question: "Which of these is the British word for 'truck'?",
        options: ["Lorry", "Caravan", "Bus", "Van"],
        correctAnswer: "Lorry",
        points: 10,
        feedbackCorrect: "Muito bem! 'Lorry' é o equivalente britânico de 'truck'.",
        feedbackIncorrect: "Não foi dessa vez! Em inglês britânico, 'truck' é 'lorry'."
      },
      {
        difficulty: "easy",
        question: "How do Americans say 'jumper'?",
        options: ["Sweater", "Vest", "Jacket", "Hoodie"],
        correctAnswer: "Sweater",
        points: 10,
        feedbackCorrect: "Perfeito! 'Jumper' no Reino Unido é 'sweater' nos EUA.",
        feedbackIncorrect: "Errado! Nos EUA, 'jumper' é chamado de 'sweater'."
      },
      {
        difficulty: "medium",
        question: "What is 'crisps' in American English?",
        options: ["Chips", "Fries", "Snacks", "Crackers"],
        correctAnswer: "Chips",
        points: 20,
        feedbackCorrect: "Boa! Nos EUA, 'crisps' são 'chips'.",
        feedbackIncorrect: "Errado! Os britânicos dizem 'crisps' para o que os americanos chamam de 'chips'."
      },
      {
        difficulty: "medium",
        question: "In British English, 'public school' actually means what?",
        options: ["Private school", "Government school", "University", "College"],
        correctAnswer: "Private school",
        points: 20,
        feedbackCorrect: "Certo! Em inglês britânico, 'public school' é uma escola privada de elite.",
        feedbackIncorrect: "Errado! No Reino Unido, 'public school' significa escola privada, não pública."
      },
      {
        difficulty: "medium",
        question: "What do Americans call a 'queue'?",
        options: ["Line", "Row", "Column", "List"],
        correctAnswer: "Line",
        points: 20,
        feedbackCorrect: "Correto! 'Queue' no Reino Unido é 'line' nos EUA.",
        feedbackIncorrect: "Errado! Os americanos dizem 'line' em vez de 'queue'."
      },
      {
        difficulty: "medium",
        question: "What is 'takeaway' in American English?",
        options: ["Takeout", "Delivery", "Fast food", "Dine-in"],
        correctAnswer: "Takeout",
        points: 20,
        feedbackCorrect: "Boa! 'Takeaway' no Reino Unido é 'takeout' nos EUA.",
        feedbackIncorrect: "Errado! Os americanos usam 'takeout' em vez de 'takeaway'."
      },
      {
        difficulty: "medium",
        question: "What does 'flatmate' mean in American English?",
        options: ["Roommate", "Neighbor", "Teammate", "Classmate"],
        correctAnswer: "Roommate",
        points: 20,
        feedbackCorrect: "Acertou! 'Flatmate' e 'roommate' significam colega de quarto.",
        feedbackIncorrect: "Errado! O equivalente americano de 'flatmate' é 'roommate'."
      },
      {
        difficulty: "medium",
        question: "How do Americans say 'postman'?",
        options: ["Mailman", "Delivery guy", "Courier", "Messenger"],
        correctAnswer: "Mailman",
        points: 20,
        feedbackCorrect: "Certo! 'Mailman' é o equivalente americano de 'postman'.",
        feedbackIncorrect: "Errado! Em inglês americano, o termo é 'mailman'."
      },
      {
        difficulty: "medium",
        question: "What is 'biscuit' in American English?",
        options: ["Cookie", "Bread roll", "Cracker", "Cake"],
        correctAnswer: "Cookie",
        points: 20,
        feedbackCorrect: "Boa! 'Biscuit' no Reino Unido é 'cookie' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano para 'biscuit' (britânico) é 'cookie'."
      },
      {
        difficulty: "medium",
        question: "In British English, 'pants' means what in American English?",
        options: ["Underwear", "Trousers", "Shorts", "Jeans"],
        correctAnswer: "Underwear",
        points: 20,
        feedbackCorrect: "Correto! Cuidado: 'pants' no Reino Unido significa 'underwear', não 'trousers'.",
        feedbackIncorrect: "Errado! No inglês britânico, 'pants' quer dizer 'underwear'."
      },
      {
        difficulty: "medium",
        question: "How do Americans say 'chemist'?",
        options: ["Pharmacy / Drugstore", "Hospital", "Lab", "Clinic"],
        correctAnswer: "Pharmacy / Drugstore",
        points: 20,
        feedbackCorrect: "Certo! 'Chemist' no Reino Unido é 'pharmacy' ou 'drugstore' nos EUA.",
        feedbackIncorrect: "Errado! Nos EUA, o termo correto é 'pharmacy' ou 'drugstore'."
      },
      {
        difficulty: "medium",
        question: "What is 'lorry driver' in American English?",
        options: ["Truck driver", "Bus driver", "Taxi driver", "Delivery driver"],
        correctAnswer: "Truck driver",
        points: 20,
        feedbackCorrect: "Boa! 'Lorry driver' é 'truck driver' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano é 'truck driver'."
      },
      {
        difficulty: "hard",
        question: "What is the American equivalent of 'car park'?",
        options: ["Parking lot", "Garage", "Driveway", "Rest area"],
        correctAnswer: "Parking lot",
        points: 30,
        feedbackCorrect: "Excelente! 'Car park' no Reino Unido é 'parking lot' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano é 'parking lot'."
      },
      {
        difficulty: "hard",
        question: "In the UK, 'boot' refers to which part of a car?",
        options: ["Trunk", "Hood", "Bumper", "Tire"],
        correctAnswer: "Trunk",
        points: 30,
        feedbackCorrect: "Acertou! 'Boot' no Reino Unido é 'trunk' nos EUA.",
        feedbackIncorrect: "Errado! Em inglês americano, 'boot' é 'trunk'."
      },
      {
        difficulty: "hard",
        question: "What is the American word for 'timetable'?",
        options: ["Schedule", "Agenda", "Planner", "Calendar"],
        correctAnswer: "Schedule",
        points: 30,
        feedbackCorrect: "Correto! 'Timetable' é o mesmo que 'schedule' em inglês americano.",
        feedbackIncorrect: "Errado! O termo americano para 'timetable' é 'schedule'."
      },
      {
        difficulty: "hard",
        question: "What does 'caravan' mean in American English?",
        options: ["Trailer / RV", "Van", "Bus", "Truck"],
        correctAnswer: "Trailer / RV",
        points: 30,
        feedbackCorrect: "Perfeito! 'Caravan' no Reino Unido é 'trailer' ou 'RV' nos EUA.",
        feedbackIncorrect: "Errado! O equivalente americano de 'caravan' é 'trailer' ou 'RV'."
      },
      {
        difficulty: "hard",
        question: "What do Americans call a 'mobile phone'?",
        options: ["Cell phone", "Smartphone", "Payphone", "Telephone"],
        correctAnswer: "Cell phone",
        points: 30,
        feedbackCorrect: "Boa! 'Mobile phone' no Reino Unido é 'cell phone' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano correto é 'cell phone'."
      },
      {
        difficulty: "hard",
        question: "In British English, 'biscuit' in the US can also refer to what kind of food?",
        options: ["Soft bread roll", "Cookie", "Cake", "Cracker"],
        correctAnswer: "Soft bread roll",
        points: 30,
        feedbackCorrect: "Correto! Nos EUA, 'biscuit' é um tipo de pão macio, não um biscoito.",
        feedbackIncorrect: "Errado! Nos EUA, 'biscuit' é um pãozinho salgado e macio."
      },
      {
        difficulty: "hard",
        question: "What is the American equivalent of 'underground' (transport)?",
        options: ["Subway", "Metro", "Train", "Bus"],
        correctAnswer: "Subway",
        points: 30,
        feedbackCorrect: "Certo! 'Underground' no Reino Unido é 'subway' nos EUA.",
        feedbackIncorrect: "Errado! Nos EUA, 'underground' é chamado de 'subway'."
      },
      {
        difficulty: "hard",
        question: "What is 'nappy' in American English?",
        options: ["Diaper", "Napkin", "Towel", "Blanket"],
        correctAnswer: "Diaper",
        points: 30,
        feedbackCorrect: "Boa! 'Nappy' no Reino Unido é 'diaper' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano é 'diaper'."
      },
      {
        difficulty: "hard",
        question: "What is the American word for 'torch'?",
        options: ["Flashlight", "Lamp", "Lightbulb", "Lantern"],
        correctAnswer: "Flashlight",
        points: 30,
        feedbackCorrect: "Correto! 'Torch' no Reino Unido é 'flashlight' nos EUA.",
        feedbackIncorrect: "Errado! Em inglês americano, 'torch' é 'flashlight'."
      },
      {
        difficulty: "hard",
        question: "What does 'motorway' mean in American English?",
        options: ["Highway", "Freeway", "Main road", "Expressway"],
        correctAnswer: "Highway",
        points: 30,
        feedbackCorrect: "Excelente! 'Motorway' no Reino Unido é 'highway' nos EUA.",
        feedbackIncorrect: "Errado! O termo americano é 'highway'."
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Question', null, {});
  }
};
