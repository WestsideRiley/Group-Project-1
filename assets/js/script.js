var startBtn = document.querySelector('#startQuiz')
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

function displaySearchForm() {
    var searchForm = document.getElementById('shelter-search');
    if (searchForm.style.display == 'none') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
}