const questions = [                                                   /* const is a keyword which is used to define a new variable in JavaScript */ 
    {
        question: "Which is the largest animal in the world?",        /*Setting the questions, questions is the name of the variables */
        answers:[                                                     /* Setting the options to the qustions */
             { text:"Shark", correct: false},                         /* Setting the answers to the qustions */
             { text:"Blue Whale", correct: true},
             { text:"Elephant", correct: false}, 
             { text:"Giraffe", correct: false},
    
               ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers:[
             { text:"Vatican City", correct: true},
             { text:"Bhutan", correct: false},
             { text:"Nepal", correct: false},
             { text:"Sri Lanka", correct: false},
    
                ]
    },
    {
    
        question: "Which is the largest desert in the world?",
        answers:[
             { text:"Kalahari", correct: false},
             { text:"Gobi", correct: false},
             { text:"Sahara", correct: true},
             { text:"Antarctica", correct: false},
    
                ]
    },
    {
    
        question: "Which is the smallest continent in the the world?",
        answers:[
             { text:"asia", correct: false},
             { text:"Australia", correct: true},
             { text:"Arctic", correct: false},
             { text:"Africa", correct: false},
    
                ]
    }
    ];
    
   /* The HTML DOM document object is the owner of all other objects in your web page and The getElementById() method returns an element with a specified value */
    const questionElement = document.getElementById("question");       /* Here Adding the variable for the Element question */
    const answerButtons = document.getElementById("answer-buttons");   /* Here Adding the variable for the Element answer-button */
    const nextButton = document.getElementById("next-btn");            /* Here Adding the variable for the Element next-btn */
    
    
    let currentQuestionIndex = 0;                                      /* The Index will start from the zero */
    let score = 0;                                                     /* The score will start from the zero */
    
    function startQuiz(){                                              /* Here calling a function startQuiz */
    currentQuestionIndex = 0;                                          /* when will start the quiz it should reset the current question index zero */
    score = 0;                                                         /* when will start the quiz it should reset the score zero */
    nextButton.innerHTML = "Next";                                     /* Here adding innerHTML = Next because at the end we will change the text to the replay/restart */
    showQuestion();                                                    /* Here calling a function showquestion to display the questions */
    }
    
    function showQuestion()                                            /* Here defining a function showquestion to display the questions */
    {
        resetState();                                                   /* Before displaying the question we have to call one function name resetState() to reset the previous question and answers */
        let currentQuestion = questions[currentQuestionIndex];          /* Here setting the current question index number to currentQuestion variavle */
        let questionNo = currentQuestionIndex + 1;                      /* Here adding + 1 to the current question index number to show the current question number */
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question; /* Here updating text of the question with innerHTML */
    
    
        currentQuestion.answers.forEach(answer => {                    /* We have to display the anser from the current question set and add the code to display the anser */
        const button = document.createElement("button");               /* Here creating a button tag by document.createElement and we will save it in the variable button */
        button.innerHTML = answer.text;                                /* In the variable button we have to add text by button.innerHTML */
        button.classList.add("btn");                                   /* In the variable button we have to add classname by button.classList.add("btn") */
        answerButtons.appendChild(button);                             /* We have to display the button inside the <div> by answerButtons.appendChild(button) */
        if (answer.correct){                                           /* It will check the correct answer from the data set */

            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);               /* We have to add the click function to the correct answer */

        });
    }
    
function resetState()                                                 /* Here defining a function resetState to reset the previous question and answers */
{
nextButton.style.display = "none";                                    /* It will remove all the previous question and answers */
while(answerButtons.firstChild){

    answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e)                                             /* Here defining a function showquestion to display the questions */
{
const selectedBtn = e.target;                                        /* when we will click on the button(answer) it will add the selected button element in the variable selectedBtn */
const isCorrect = selectedBtn.dataset.correct === "true";            /* It will check the selected btn dataset true */
if (isCorrect){

    selectedBtn.classList.add("correct");                            /* If the dataset id true then it will add the class name correct */
    score++;                                                         /* It will increase the score by 1 */
} else {
    selectedBtn.classList.add("incorrect");                          /* If the dataset id true then it will add the class name incorrect */

}

Array.from(answerButtons.children).forEach(button => {               /* Added Array from (answerButtons.children).forEach ,so for each button it will check the dataset */
if (button.dataset.correct === "true"){                              /* If it is true then it will the class name correct */
button.classList.add("correct");                                    
}
button.disabled = "block";                                           /* It will disable the button (other answer) */
});

nextButton.style.display = "block";                                  /* It will display the Next button, so that we can go to the Next question */

}

function showScore(){

resetState();                                                        /* To display the score we have to call the resetState() function */
questionElement.innerHTML = "You scored " + score + " out of " + questions.length +" !";   /* It will display the score */
nextButton.innerHTML = "Play Again";                                                       /* It will give Play Again option to start the quiz again */
nextButton.style.display = "block";                                  /* It will display the Next button, so that we can go to the Next question */

}

function handleNextButton(){                                         /* Here defining a function handleNextButton to start the quiz again */
currentQuestionIndex++;                                              /* It will increase the question index by 1 */
if (currentQuestionIndex < questions.length){                        /* If the current question index is less than question length (question number) */

    showQuestion();                                                  /* It will show the question */
}else{

    showScore();                                                     /* It will show the score */
}

}

nextButton.addEventListener("click", ()=>{                           /* The addEventListener() method attaches an event handler to an element */

    if(currentQuestionIndex < questions.length){                     /* It will check the current index of question, if the currentQuestionIndex is less than length of the questions */
handleNextButton();                                                  /* If there no more questions so it will start the quiz again */
        }else{
                startQuiz();                                         /* Here calling a function startQuiz to start the quiz */

        }
}) ;

    startQuiz();                                                     /* Here calling a function startQuiz to start the quiz */
