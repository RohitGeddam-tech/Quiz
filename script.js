const startButton = document.getElementById('start-btn') //startbutton is the var tat uns the id start-btn
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

//shuffle questions don't use const use let
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame) //when you click on start-btn startgame function will run.
//the things happen when you click on nextbtn is mentioned here
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//startGame happens when you click on start button.
//what to do once you clicked of start-btn is mentioned here.
function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    //this is going to take a question, if it is negative it will sort in one way if it is positive the sort will be in another way
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//for the next question. show question shows the shuffled question to you
function setNextQuestion(){
    // reset state is going to reset everything back to default
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

//show question gets the question from const questions below.
function showQuestion(question){
    questionElement.innerText = question.question
    //answer is the array far is loop answer is  parameter. 
    question.answers.forEach(answer => {
        // create button var and  change the element buttons text with answer, add button text to class btn.
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //if to check whether the answer is right or wrong .data set is gonna add a data atribute onto button element
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    //looping through all the child for answerbuttonelement
    while (answerButtonsElement.firstChild)
    //essentially meaning thta if there is a child inside the answer button we will remove it
    {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

//when we select an answer and want the response this selectAnswer will give that response.
function selectAnswer(e){
    //e.target means whatever we clicked on.
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    //create a new var setstatusclass to check whether to change the body to correct or not
    setStatusClass(document.body, correct)
    //the reason to create an array is because the answerbuttonselement is not technicaly an array
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    //if the shuffled length is greater then current question then this happens
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = ('Restart')
        startButton.classList.remove('hide')
    }
}

//createing setstatusclass
function setStatusClass(element, correct){
    //first clear any status it already has using function clearstatusclass
    clearStatusClass(element)
    //if this correct we will add correct class to it for wrong add wrong class
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//questions to be displayed. []= array. don't forget to put commas after every var
const questions = [
    {
        question: 'where is my novel uploaded?',
        answers: [
            { text: 'Webnovel', correct: true},
            { text: 'Good-Novel', correct: false},
            { text: 'MTLNovel', correct: false},
            { text: 'Comrademao', correct: false}
        ]
    },
    {
        question: 'whose novel is the best?',
        answers: [
            { text: 'AR', correct: false},
            { text: 'Shubha', correct: false},
            { text: 'Commoner_prince', correct: true},
            { text: 'Zane', correct: false}
        ]
    },
    {
        question: 'what is my highest collection ranking?',
        answers: [
            { text: '178', correct: false},
            { text: '22', correct: true},
            { text: '1', correct: false},
            { text: '51', correct: false}
        ]
    },
    {
        question: 'what is the name of my Novel?',
        answers: [
            { text: 'Line of death', correct: false},
            { text: 'Legend of the spirit Continent', correct: false},
            { text: 'Became the secret mob', correct: false},
            { text: 'Being Myself In Naruto', correct: true}
        ]
    }
]