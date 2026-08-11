const questions = [
    {
        question: "Which is the Largest Animal on this Planet?",
        options: [
            { text: "Shark", correct: "false" },
            { text: "Whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        options: [
            { text: "Nepal", correct: "false" },
            { text: "Bhutan", correct: "false" },
            { text: "Vatican City", correct: "true" },
            { text: "Maldives", correct: "false" },
        ]
    },
    {
        question: "which is the hightest mountain in the world?",
        options: [
            { text: "Mt k2", correct: "false" },
            { text: "Mt Everest", correct: "true" },
            { text: "Mt Lhotse", correct: "false" },
            { text: "Mt Annapurna", correct: "false" },
        ]
    }

];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let defaultScore = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    defaultScore = 0;
    currentQuestionIndex = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}
startQuiz();
function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.options.forEach(option => {
        const answerBtn = document.createElement("button");
        answerBtn.classList.add("btn");
        answerBtn.innerHTML = option.text;
        answerButton.appendChild(answerBtn);
        if (option.correct) {
            answerBtn.dataset.correct = option.correct;
        }
        answerBtn.addEventListener("click", selectAnswer);
    })
}


function selectAnswer(e) {
    const selectElement = e.target;
    const correctElement = selectElement.dataset.correct === true;
    if (correctElement) {
        selectElement.classList.add("correct");
        defaultScore++;
    }
    else {
        selectElement.classList.add("incorrect");
    };
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
   
}

 nextBtn.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        }
        else {
            startQuiz();
        }
    })

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${defaultScore} out of ${questions.length}`
    nextBtn.innerHTML = "Play Again!!"
    nextBtn.style.display = "block";

}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    }
    else {
        showScore();
    }
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
