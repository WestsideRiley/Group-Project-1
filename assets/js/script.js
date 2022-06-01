var startBtn = document.querySelector('#startQuiz')
var zipCode = document.querySelector('#zipcode')
var searchButton = document.querySelector('#submitZipCode')
var imageZero = document.querySelector('#baconEggsImage')
var imageOne = document.querySelector('#spaghettiImage')
var imageTwo = document.querySelector('#tacosImage')
var imageThree = document.querySelector('#pizzaImage')
var imageFour = document.querySelector('#steakImage')
var btn0 = document.querySelector('#zero')
var btn1 = document.querySelector('#one')
var btn2 = document.querySelector('#two')
var btn3 = document.querySelector('#three')
var bt4 = document.querySelector('#four')
var btn5 = document.querySelector('#five')

startBtn.addEventListener('click', displayQuestion)

function displayQuestion() {
    var quiz = document.getElementById('quiz');
    var welcome = document.getElementById('welcome-page');
    if (quiz.style.display == 'none') {
        quiz.style.display = 'block';
        welcome.style.display = 'none';
    } else {
        quiz.style.display = 'none';
        welcome.style.display = 'block';
    } 
}

const api_url =
	"https://dog.ceo/api/breeds/list/all3"

    async function getapi(url) {
	
        // Storing response
        const response = await fetch(url);
        
        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        if (response) {
            hideloader();
        }
        show(data);
    }
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data, block) {	
	// Loop to access all rows
	for (let r of data.list) {
		block += [r.message]
	}
	// Setting innerHTML as tab variable
	document.getElementById("storage").innerHTML = block;
}


function displaySearchForm() {
    var searchForm = document.getElementById('shelter-search');
    if (searchForm.style.display == 'none') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
}