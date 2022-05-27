var startBtn = document.querySelector('#startQuiz')
var shelterSearchForm = document.querySelector('#shelter-search')
var zipCode = document.querySelector('#zipcode')
var searchButton = document.querySelector('#submitZipCode')

startBtn.addEventListener('click', displayQuestion)

function displayQuestion() {
    var quiz = document.getElementById('quiz');
    if (quiz.style.display == 'none') {
        quiz.style.display = 'block';
    } else {
        quiz.style.display = 'none';
    }    
}