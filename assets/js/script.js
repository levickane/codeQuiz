var homeScreenDiv = document.getElementById('homeScreenDiv')
var startBtn = document.getElementById('startButton')
var timerDiv = document.getElementById('timerDiv')
var questionCardDiv = document.getElementById('questionCardDiv')
var h3Question = document.getElementById('h3Question')
var answerList = document.getElementById('answerList')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var alertDiv = document.getElementById('answerAlert')
var finalScoreDiv = document.getElementById('finalScoreDiv')
var userFinalScore = document.getElementById('userFinalScore')
var initialsInput = document.getElementById('initialsInput')
var leaderboardDiv = document.getElementById('leaderboardDiv')
var leaderboardList = document.getElementById('leaderboardList')
var formSubmissionBtn = document.getElementById('formSubmissionBtn')

var questionCounter = 0
var answerCounter = 0
var correctCounter = 0

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
    question: 'Which of the following is a datatype?',

    answer1: {
      correct: false,
      content: 'mole'
    },

    answer2: {
      correct: false,
      content: 'math'
    },
    answer3: {
      correct: false,
      content: 'jewl'
    },
    answer4: {
      correct: true,
      content: 'boolean'
    }
  },
  {
    question: 'What keyword do you use to set a variable?',

    answer1: {
      correct: true,
      content: 'var'
    },

    answer2: {
      correct: false,
      content: 'variable'
    },
    answer3: {
      correct: false,
      content: 'x'
    },
    answer4: {
      correct: false,
      content: 'set'
    }
  },
  {
    question: 'Which of the following is NOT a coding language?',

    answer1: {
      correct: false,
      content: 'JavaScript'
    },

    answer2: {
      correct: false,
      content: '.Net'
    },
    answer3: {
      correct: true,
      content: 'CoffeeScript'
    },
    answer4: {
      correct: false,
      content: 'CSS'
    }
  },
  {
    question: 'What are ternary functions for?',

    answer1: {
      correct: true,
      content: 'shorthand if statements'
    },

    answer2: {
      correct: false,
      content: 'looping through 3 items'
    },
    answer3: {
      correct: false,
      content: 'a 3 tiered if state'
    },
    answer4: {
      correct: false,
      content: 'None of the above'
    }
  },
  {
    question: 'Coding involves a lot of.....',

    answer1: {
      correct: false,
      content: 'memorization'
    },

    answer2: {
      correct: true,
      content: 'Googling'
    },
    answer3: {
      correct: false,
      content: 'nerdy smartness'
    },
    answer4: {
      correct: false,
      content: 'computer science college knowledge'
    }
  }
]
var timeLeft = 15

function countDown() {
  var timeInterval = setInterval(function () {
    timeLeft--
    timerDiv.textContent = `${timeLeft} seconds left.`
    if (timeLeft <= 0) {
      clearInterval(timeInterval)
      timerDiv.textContent = 'YOU LOST BREAUX!'
      endGame()
    } else if (answerCounter == questionsArray.length) {
      clearInterval(timeInterval)
      timerDiv.textContent = ''
      endGame()
    }
  }, 1000)
}

function pageLoad() {
  questionCardDiv.style.display = 'none'
  alertDiv.style.display = 'none'
  finalScoreDiv.style.display = 'none'
  leaderboardDiv.style.display = 'none'
}

startBtn.addEventListener('click', () => {
  homeScreenDiv.style.display = 'none'
  startGame()
  countDown()
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
  questionCounter += 1
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
  if (answerClicked === 'true') {
    correctCounter++
    answerCounter += 1
    answerAlert(true)
    if (questionCounter != questionsArray.length) {
      loadQuestion()
    } else {
      endGame()
    }
  } else if (answerClicked == 'false') {
    correctCounter--
    timeLeft -= 2
    answerCounter += 1
    answerAlert(false)
    if (questionCounter != questionsArray.length) {
      loadQuestion()
    } else {
      endGame()
    }
  }
}

function endGame() {
  questionCardDiv.style.display = 'none'
  alertDiv.style.display = 'none'
  finalScoreDiv.style.display = 'block'
  userFinalScore.innerHTML = `Your score is ${correctCounter}`
}

// LOCAL STORAGE***************
var leaderboardStorage = []

function renderLeaderboard() {
  timerDiv.textContent = ''
  leaderboardList.innerHTML = ''
  for (let i = 0; i < leaderboardStorage.length; i++) {
    leaderboardScore = leaderboardStorage[i]
    var li = document.createElement('li')
    li.textContent = `${leaderboardScore.username} with ${leaderboardScore.score} points`
    leaderboardList.appendChild(li)
  }
  //Play Again handlers
  var playAgainBtn = document.createElement('button')
  playAgainBtn.textContent = 'Play Again'
  leaderboardDiv.appendChild(playAgainBtn)
  playAgainBtn.addEventListener('click', () => {
    location.reload()
  })
  //Clear the scoreboard
  var clearScoresBtn = document.createElement('button')
  clearScoresBtn.textContent = 'Clear Leaderboard'
  leaderboardDiv.appendChild(clearScoresBtn)
  clearScoresBtn.addEventListener('click', () => {
    localStorage.clear()
    leaderboardList.innerHTML = ''
  })
}

function initLeaderboard() {
  var storedLeaderboard = JSON.parse(localStorage.getItem('userInfo'))
  console.log(storedLeaderboard)
  console.log(storedLeaderboard)
  if (storedLeaderboard !== null) {
    leaderboardStorage = storedLeaderboard
  }
}

function storeLeaderboardScores() {
  userData = {
    username: initialsInput.value,
    score: correctCounter
  }
  leaderboardStorage.push(userData)
  localStorage.setItem('userInfo', JSON.stringify(leaderboardStorage))
}

function displayFinalPage() {
  formSubmissionBtn.addEventListener('click', (event) => {
    event.preventDefault()
    formSubmissionBtn.style.display = 'none'
    formSubmissionBtn.setAttribute('disabled', 'disabled')
    leaderboardDiv.style.display = 'block'
    storeLeaderboardScores()
    renderLeaderboard()
  })
}

function empty() {
  formSubmissionBtn.addEventListener('click', (event) => {
    if (initialsInput == '') {
      event.preventDefault()
    } else {
      displayFinalPage()
    }
  })
}

initLeaderboard()
