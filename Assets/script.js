// Create variables
    // Array of questions for the game
    // Array of answers for the game

// GIVEN I am taking a code quiz
    // Need to develop a start page, with instructions and a start button
    // A timer appears in the upper right hand corner of the page
    // A 'View Highscore' button appears in the upper left hand corner of the page

// WHEN I click the start button
        //addEventListner ("click")
// THEN a timer starts and I am presented with a question
    // A new page appears with multiple choice questions, each with a button.
    // The timer begins to count down.

// WHEN I answer a question
    // When a button is selected a message indicating whether it was answred as correct or incorrect.
        //addEventListner ("click")
    // Create a way to track the correct scores.


// (Create a loop) THEN I am presented with another question.

// When all of the questions are answered or when the timer reaches zero.
    // A new page will appear 
        // A sentence will indicate you are All Done
        // A sentence will appear with your score
        // A input box will appear asking for your initials with a submit box next to it

// THEN the game is over
    // a new page will appear 
        // showing your highscore and your initials
        // provide a Go Back button and Clear High Score button
//==========================================================================================

// Create variables
    // Array of questions for the quiz game

var currentQuestionIndex = 0

var answers = [
    {
        prompt: "Question 1",
        answer: "Answer 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        prompt: "Question 2",
        answer: "Answer 3",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        prompt: "Question 3",
        answer: "Answer 4",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        prompt: "Question 4",
        answer: "Answer 2",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },
    {
        prompt: "Question 5",
        answer: "Answer 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"]
    },

//Track score and time
var score = 0;

var timeRemaining = 60;

var timer;

// Three pages:
// Start page
    // instructions
    // start button

// Game page
    // questions
    // choice buttons 
    // timer 
    // score

// End game page
    // form for the user to input initials
    // submit button


function startGame() {

    //The timer begins to count down.
    timer = setInterval(function() {
        // Update the value inside the timer container

        // Decrease the timeRemaining
        timeRemaining

        // End game if there is no time left
        if (timeRemaining <=0) {
            endGame()
        }

    }, 1000)

    showCurrentQuestion()
}


    // Hide start page

    // Show page #2
        // timer appears in the upper right hand corner
        // 'View High Score' appears in upper left hand page
        // show the current question

function showCurrentQuestion() {
    var currentQuestion = questions [currentQuestionIndex]

    // currentQuestion.prompt as the content of your question prompt container

    // for as many choices in the array currentQuestion.choices, add one button to your question choices container

    for (var questionChoice of currentQuestion.choices) {
        var buttonE1 = document.createElement ("button")

        //Question choice text inside button
        buttonE1.innerText = questionChoice

        //add event listner to the button to check if this button's answer matches up to the question answer
        buttonE1.addEventListener("click", function () {

            // Correct? increase score
            // Incorrect? decrease score

            // next question
            currentQuestionIndex++

            //no more questions, end the game
            if (currentQuestionIndex >= questions.length) {
                endGame()
            }
            else {
                showCurrentQuestion()
            }
        })    

    }
  
}

function endGame() {
        // hide page #2
        // show page #3
        // stop the timer
}

document.getElementById("start").addEventListener("click", startGame)






