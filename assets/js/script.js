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
var btn4 = document.querySelector('#four')
var btn5 = document.querySelector('#five')

startBtn.addEventListener('click', displayQuestion)
btn0.addEventListener('click', passAussie)
btn1.addEventListener('click', passBulldog)
btn2.addEventListener('click', passChihuahua)
btn3.addEventListener('click', passGolden)
btn4.addEventListener('click', passRottie)
var quiz = document.getElementById('quiz');

function displayQuestion() {
    var welcome = document.getElementById('welcome-page');
    if (quiz.style.display == 'none') {
        quiz.style.display = 'inline-block';
        welcome.style.display = 'none';
    } else {
        quiz.style.display = 'none';
        welcome.style.display = 'inline-block';
    } 
}
var result = document.getElementById("matchBreed")
function quizResponse(){
    quiz.style.display = 'none';
    result.style.display = 'inline-block';
    // document.getElementById("storage").classList.remove('none');
    // document.getElementById("storage").classList.add('show');
  
    // document.getElementById("matchBreed").classList.remove('none');
    // document.getElementById("matchBreed").classList.add('show');
  
    // document.getElementById("shelter-search").classList.remove('none');
    // document.getElementById("shelter-search").classList.add('show');
  };

function passAussie(){
    var requestUrl = 'https://dog.ceo/api/breed/australian/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         document.getElementById("storage").src= data.message;
       
        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
     
        }});
        console.log("aussie");
quizResponse();
   
}

function passBulldog(){
    var requestUrl = 'https://dog.ceo/api/breed/bulldog/english/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         
         document.getElementById("storage").src= data.message;
    
        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
     
        }});
        quizResponse();
        
}

function passChihuahua(){
    var requestUrl = 'https://dog.ceo/api/breed/chihuahua/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         
         document.getElementById("storage").src= data.message;
    
        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
     
        }});
        quizResponse();
}

function passGolden(){
    var requestUrl = 'https://dog.ceo/api/breed/retriever/golden/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         
         document.getElementById("storage").src= data.message;

        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
     
        }});
        quizResponse();
}

function passRottie(){
    var requestUrl = 'https://dog.ceo/api/breed/rottweiler/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         
         document.getElementById("storage").src= data.message;
    
        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
     
        }});
        quizResponse();
}

// const api_url =
// 	"https://dog.ceo/api/breeds/list/all3"

//     async function getapi(url) {
	
//         // Storing response
//         const response = await fetch(url);
        
//         // Storing data in form of JSON
//         var data = await response.json();
//         console.log(data);
//         if (response) {
//             hideloader();
//         }
//         show(data);
//     }
// // Calling that async function
// getapi(api_url);

// // Function to define innerHTML for HTML table
// function show(data, block) {	
// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		block += [r.message]
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("storage").innerHTML = block;
// }


// function displaySearchForm() {
//     var searchForm = document.getElementById('shelter-search');
//     if (searchForm.style.display == 'none') {
//         searchForm.style.display = 'inline-block';
//     } else {
//         searchForm.style.display = 'none';
//     }
// }



