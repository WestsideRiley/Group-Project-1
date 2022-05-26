const startBtn = document.getElementById('startBtn')
const instructions = document.getElementById('instructions')
const foodQuiz = document.getElementById('foodQuiz')

startBtn.addEventListener('click', showQuestions)

function showQuestions(question, foodQuiz){
    // store the answer choice 
    var output = [];
    var answers;
    for(var i=0; i<question.length; i++){
        //reset the answer list 
        answers = [];
        //for each available answer...
        for(letter in question[i].answers){
            //add a radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + question[i].answers[letter]
                 + '<label>'
            );
        }
        // add this question and its answers to the output 
        output.push(
            '<div class="question">' +question[i].question + '</div'>
            + '<div class="answers">' + answers.join('') + '</div>'
         );
    }
    // finally combin our output list into one string of HTML and put it on the page 
    quizContainer.innerHTML = output.join('');
};
//show the questions
showQuestions(question, foodQuiz);

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

