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
score++;
} else {
    selectedBtn.classList.add("incorrect");                          /* If the dataset id true then it will add the class name incorrect */

}

Array.from(answerButtons.children).forEach(button => {
if (button.dataset.correct === "true"){
button.classList.add("correct");
}
button.disabled = "block";
});

nextButton.style.display = "block";

}

function showScore(){

resetState();
questionElement.innerHTML = "You scored " + score + " out of " + questions.length +" !";
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";

}

function handleNextButton(){
currentQuestionIndex++;
if (currentQuestionIndex < questions.length){

    showQuestion();
}else{

    showScore();
}

}

nextButton.addEventListener("click", ()=>{

    if(currentQuestionIndex <  questions.length){
handleNextButton();
        }else{
                startQuiz();

        }
}) ;

    startQuiz();