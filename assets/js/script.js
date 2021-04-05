console.log('hello')
var homeScreenDiv = document.getElementById('homeScreenDiv')
var startBtn = document.getElementById('startButton')
var questionCardDiv = document.getElementById('questionCardDiv')
var h3Question = document.getElementById('h3Question')
var answerList = document.getElementById('answerList')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var alertDiv = document.getElementById('answerAlert')
var finalScoreDiv = document.getElementById('finalScoreDiv')
var finalScoreForm = document.getElementById('finalSoreForm')
var userFinalScore = document.getElementById('userFinalScore')
var initialsInput = document.getElementById('initialsInput')
var leaderboardDiv = document.getElementById('leaderboardDiv')
var userInitials = document.getElementById('userInitials')
var userLeaderboardScore = document.getElementById('userLeaderboardScore')
var formSubmissionBtn = document.getElementById('formSubmissionBtn')

questionCounter = 0
correctCounter = 0

var questionsArray = [
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

function pageLoad() {
  questionCardDiv.style.display = 'none'
  alertDiv.style.display = 'none'
  finalScoreDiv.style.display = 'none'
  leaderboardDiv.style.display = 'none'
}

startBtn.addEventListener('click', () => {
  homeScreenDiv.style.display = 'none'
  startGame()
})

function startGame() {
  questionCardDiv.style.display = 'block'
  loadQuestion()
}

pageLoad()

function loadQuestion() {
  h3Question.innerHTML = `${questionsArray[questionCounter].question}`
  answer1.innerHTML = `${questionsArray[questionCounter].answer1.content}`
  answer1.setAttribute(
    'data-correct',
    questionsArray[questionCounter].answer1.correct
  )
  answer2.innerHTML = `${questionsArray[questionCounter].answer2.content}`
  answer2.setAttribute(
    'data-correct',
    questionsArray[questionCounter].answer2.correct
  )

  answer3.innerHTML = `${questionsArray[questionCounter].answer3.content}`
  answer3.setAttribute(
    'data-correct',
    questionsArray[questionCounter].answer3.correct
  )

  answer4.innerHTML = `${questionsArray[questionCounter].answer4.content}`
  answer4.setAttribute(
    'data-correct',
    questionsArray[questionCounter].answer4.correct
  )
}

function answerAlert(truefalse) {
  if (truefalse) {
    alertDiv.style.display = 'block'
    alertDiv.textContent = 'CORRECT!'
  } else {
    alertDiv.textContent = 'WRONG!!'
    alertDiv.style.display = 'block'
  }
}

function answerHandler(event) {
  var answerClicked = event.target.dataset.correct
  if (questionCounter != questionsArray.length) {
    if (answerClicked === 'true') {
      console.log('clicked')
      correctCounter++
      answerAlert(true)
      questionCounter += 1
      loadQuestion()
    } else if (answerClicked == 'false') {
      correctCounter--
      answerAlert(false)
      questionCounter += 1
      loadQuestion()
    }
  } else if (questionCounter == questionsArray.length + 1) {
    console.log('gameover')
    endGame()
  }
}

function endGame() {
  questionCardDiv.style.display = 'none'
  alertDiv.style.display = 'none'
  finalScoreDiv.style.display = 'block'
  userFinalScore.innerHTML = `Your score is ${correctCounter}`
}

formSubmissionBtn.addEventListener('click', (event) => {
  event.preventDefault()
  showLeaderBoard()
})

function showLeaderBoard() {
  leaderboardDiv.style.display = 'block'
  localStorage.setItem('initials', initialsInput.value)
  userInitials.innerHTML = `${localStorage.getItem(
    'initials'
  )} ${correctCounter}`
  console.log(userInitials)
}
