let name = prompt("What is your name?");
let playGame = confirm(`Hi ${name}, do you want to play this game?`);

if (playGame) {
  let questions = [    {      question: "Where was Manuel Belgrano born?",      answers: ["USA", "France", "Argentina", "UK"],
      correctAnswer: "Argentina"
    },
    {
      question: "What is the capital of Spain?",
      answers: ["Madrid", "Barcelona", "Seville", "Valencia"],
      correctAnswer: "Madrid"
    },
    {
      question: "What is the most abundant material on earth?",
      answers: ["Magnesium", "Oxygen", "Potassium", "Sodium"],
      correctAnswer: "Oxygen"
    }
  ];

  function playQuiz(questions) {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      let question = questions[i].question;
      let answers = questions[i].answers;
      let correctAnswer = questions[i].correctAnswer;
      
      alert(question);
      alert(answers);
      let userAnswer = prompt("Write your answer");
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("You are right!");
        score++;
      } else {
        alert("You are wrong.");
      }
    }
    alert(`Your final score is ${score}/${questions.length}`);
  }

  playQuiz(questions);
} else {
  alert(`See you later, ${name}!`);
}