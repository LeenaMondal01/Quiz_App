const questions=[
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Africa", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false}
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "Abraham Lincoln", correct: false},
            { text: "George Washington", correct: true},
            { text: "Thomas Jefferson", correct: false},
            { text: "John Adams", correct: false}
        ]
    },
    {
        question: "What is the smallest country in the world by area?",
        answers: [
            { text: "Liechtenstein", correct: false},
            { text: "Monaco", correct: false},
            { text: "San Marino", correct: false},
            { text: "Vatican City", correct: true}
        ]
    },
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        answers: [
            { text: "50°C", correct: false},
            { text: "100°C", correct: true},
            { text: "150°C", correct: false},
            { text: "200°C", correct: false}
        ]
    },
    {
        question: "What is the smallest country in the world by area?",
        answers: [
            { text: "Liechtenstein", correct: false},
            { text: "Monaco", correct: false},
            { text: "San Marino", correct: false},
            { text: "Vatican City", correct: true}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true},
            { text: "Dollar", correct: false},
            { text: "Peso", correct: false},
            { text: "Won", correct: false}
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false},
            { text: "Leo Tolstoy", correct: false},
            { text: "William Shakespeare", correct: true},
            { text: "Mark Twain", correct: false}
        ]
    },
    {
        question: "In which continent is the Sahara Desert located?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: false},
            { text: "South America", correct: false},
            { text: "Africa", correct: true}
        ]
    },
    {
        question: "What is the main ingredient in sushi?",
        answers: [
            { text: "Rice", correct: true},
            { text: "Cheese", correct: false},
            { text: "Noodles", correct: false},
            { text: "Bread", correct: false}
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();