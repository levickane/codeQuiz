var gameScreen = document.getElementById('gameScreen')
var start = document.getElementById('startButton')
var questionDiv = document.getElementById('questionCard')

var correctCounter = 0

var questions = [
  {
    question: 'Which coding language is most dynamic',

    answer1: {
      correct: false,
      content: 'HTML'
    },

    answer2: {
      correct: false,
      content: 'CSS'
    },
    answer3: {
      correct: false,
      content: 'Python'
    },
    answer4: {
      correct: true,
      content: 'JavaScript'
    }
  },
  {
    question: 'This is question number 2',

    answer1: {
      correct: true,
      content: 'answer 1'
    },

    answer2: {
      correct: false,
      content: 'Answer 2'
    },
    answer3: {
      correct: false,
      content: 'Answer 3'
    },
    answer4: {
      correct: false,
      content: 'Answer 4'
    }
  },
  {
    question: 'Quesiton number 3 is here!',

    answer1: {
      correct: false,
      content: 'answer1'
    },

    answer2: {
      correct: false,
      content: 'answer 2'
    },
    answer3: {
      correct: true,
      content: 'answer 3'
    },
    answer4: {
      correct: false,
      content: 'Answer 4'
    }
  }
]

start.addEventListener('click', () => {
  gameScreen.style.display = 'none'
  console.log('disapear')
  startGame()
})

function answerHandler(event) {
  if (event.target.dataset.correct) {
    correctCounter++
    console.log(correctCounter)
  }
}

function showQuestion() {
  questionDiv.innerHTML = `<h2>${questions[0].question}</h2>
  <button data-correct=${questions[0].answer1.correct} onclick=answerHandler(event)>${questions[0].answer1.content}</button>
  <button data-correct=${questions[0].answer2.correct} onclick=answerHandler(event)>${questions[0].answer2.content}</button>
  <button data-correct=${questions[0].answer3.correct} onclick=answerHandler(event)>${questions[0].answer3.content}</button>
  <button data-correct=${questions[0].answer4.correct} onclick=answerHandler(event)>${questions[0].answer4.content}</button>`
}

function startGame() {
  showQuestion()
}
