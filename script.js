const questions = [
    {
        question1: "Which is the Largest Animal on this Planet?",
        options: [
            { text: "Shark", correct: "false" },
            { text: "Whale", correct: "true" },
            { text: "Elephant", correct: "false" },
            { text: "Giraffe", correct: "false" },
        ]
    },
    {
        question2: "Which is the smallest country in the world?",
        options: [
            { text: "Nepal", correct: "false" },
            { text: "Bhutan", correct: "false" },
            { text: "Vatican City", correct: "true" },
            { text: "Maldives", correct: "false" },
        ]
    },
    {
        question3:"which is the hightest mountain in the world?",
        options:[
            {text:"Mt k2", corrext:"false"},
            {text:"Mt Everest", correct:"true"},
            {text:"Mt Lhotse", correct:"false"},
            {text:"Mt Annapurna",correcr:"false"},
        ]
    },
]
console.log(questions[0].question1);