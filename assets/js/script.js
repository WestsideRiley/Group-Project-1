var startBtn = document.querySelector('#startQuiz')
var zipCode = document.querySelector('#zipcode')
var searchButton = document.querySelector('#submitZipCode')
var imageZero = document.querySelector('#baconEggsImage')
var imageOne = document.querySelector('#spaghettiImage')
var imageTwo = document.querySelector('#tacosImage')
var imageThree = document.querySelector('#pizzaImage')
var imageFour = document.querySelector('#steakImage')
var button0 = document.querySelector('#zero')
var button1 = document.querySelector('#one')
var button2 = document.querySelector('#two')
var button3 = document.querySelector('#three')
var button4 = document.querySelector('#four')
var button5 = document.querySelector('#five')

startBtn.addEventListener('click', displayQuestion)

function displayQuestion() {
    var quiz = document.getElementById('quiz');
    if (quiz.style.display == 'none') {
        quiz.style.display = 'block';
    } else {
        quiz.style.display = 'none';
    }    
};


function displaySearchForm() {
    var searchForm = document.getElementById('shelter-search');
    if (searchForm.style.display == 'none') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
}