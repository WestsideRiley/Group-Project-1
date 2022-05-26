const startBtn = document.getElementById('start-button')
const instructions = document.getElementById('instructions')



startBtn.addEventListener('submit', startQuiz);

let question = {
    question: "What is your favorite food?",
    answers: {
        a: Bacon & Eggs,
        b: Spaghetti,
        c: Tacos,
        d: Pizza,
        e: Steak
    }
}

