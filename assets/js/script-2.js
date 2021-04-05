var homeScreen = document.getElementById('homeScreen')
var start = document.getElementById('startButton')
var questionDiv = document.getElementById('questionCard')
var alertDiv = document.getElementById('answerAlert')
var finalScorePage = document.getElementById('finalScorePage')
var finalScore = document.getElementById('finalScore')

var correctCounter = 0
var questionCounter = 0

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
      correct: false,
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
      correct: true,
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
      correct: false,
      content: 'answer 3'
    },
    answer4: {
      correct: true,
      content: 'Answer 4'
    }
  }
]

start.addEventListener('click', () => {
  homeScreen.style.display = 'none'
  console.log('disapear')
  startGame()
})

function answerAlert(truefalse) {
  if (truefalse) {
    alertDiv.innerHTML = `<hr/>
    <h2>Correct!<h2/>`
  } else {
    alertDiv.innerHTML = `<hr/>
    <h2>WRONG!<h2/>`
  }
}

function endGame() {
  finalScore.innerHTML = `your final score is ${correctCounter}`
  questionDiv.style.display = 'none'
  alertDiv.style.display = 'none'
  finalScorePage.style.display = 'block'
}

function answerHandler(event) {
  var isCorrect = event.target.dataset.correct
  if (questionCounter != questions.length) {
    if (isCorrect === 'true') {
      correctCounter++
      questionCounter += 1
      answerAlert(true)
      showQuestion()
    } else {
      correctCounter--
      questionCounter += 1
      answerAlert(false)
      showQuestion()
    }
  } else {
    console.log('gameover')

    endGame()
  }

  console.log(correctCounter)
}

function showQuestion() {
  questionDiv.innerHTML = `<h2>${questions[questionCounter].question}</h2>
  <button data-correct=${questions[questionCounter].answer1.correct} onclick=answerHandler(event)>${questions[questionCounter].answer1.content}</button>
  <button data-correct=${questions[questionCounter].answer2.correct} onclick=answerHandler(event)>${questions[questionCounter].answer2.content}</button>
  <button data-correct=${questions[questionCounter].answer3.correct} onclick=answerHandler(event)>${questions[questionCounter].answer3.content}</button>
  <button data-correct=${questions[questionCounter].answer4.correct} onclick=answerHandler(event)>${questions[questionCounter].answer4.content}</button>`
}

function startGame() {
  finalScorePage.style.display = 'none'
  showQuestion()
}
