const startBtn = document.getElementById('startQuiz')
const instructions = document.getElementById('instructions')
const foodQuiz = document.getElementById('foodQuiz')
const foodQuestion = document.getElementById('question')

startBtn.addEventListener('click', showQuestions)

function showQuestions(foodQuestion, foodQuiz){
    // store the answer choice 
    var output = [];
    var answers;
    for(var i=0; i<foodQuestion.length; i++){
        //reset the answer list 
        answers = [];
        //for each available answer...
        for(letter in foodQuestion[i].answers){
            //add a radio button
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + foodQuestion[i].answers[letter]
                 + '<label>'
            );
        }
        // add this question and its answers to the output 
        output.push(
            '<div class="question">' +foodQuestion[i].foodQuestion + '</div'>
            + '<div class="answers">' + answers.join('') + '</div>'
         );
    }
    // finally combin our output list into one string of HTML and put it on the page 
    quizContainer.innerHTML = output.join('');
}

//show the questions
showQuestions(foodQuestion, foodQuiz);



