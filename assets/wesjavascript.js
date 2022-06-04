var startBtn = document.querySelector('#startQuiz');
var zipCode = document.querySelector('#zipcode');
var searchButton = document.querySelector('#submitZipCode');
var imageZero = document.querySelector('#baconEggsImage');
var imageOne = document.querySelector('#spaghettiImage');
var imageTwo = document.querySelector('#tacosImage');
var imageThree = document.querySelector('#pizzaImage');
var imageFour = document.querySelector('#steakImage');
var btn0 = document.querySelector('#zero');
var btn1 = document.querySelector('#one');
var btn2 = document.querySelector('#two');
var btn3 = document.querySelector('#three');
var bt4 = document.querySelector('#four');
var btn5 = document.querySelector('#five');

startBtn.addEventListener('click', displayQuestion);

function displayQuestion() {
    document.getElementById("welcome-page").classList.add('none');
    document.getElementById("welcome-page").classList.remove('show');
  
    document.getElementById("quiz").classList.remove('none');
    document.getElementById("quiz").classList.add('show');
};

function QuizResponse(){
    document.getElementById("quiz").classList.remove('show');
    document.getElementById("quiz").classList.add('none');
  
    document.getElementById("storage").classList.remove('none');
    document.getElementById("storage").classList.add('show');
  
    document.getElementById("matchBreed").classList.remove('none');
    document.getElementById("matchBreed").classList.add('show');
  
    document.getElementById("shelter-search").classList.remove('none');
    document.getElementById("shelter-search").classList.add('show');
  };

imageZero.addEventListener("click",passAussie);
imageOne.addEventListener("click", passBulldog);
imageTwo.addEventListener("click", passChihuahua);
imageThree.addEventListener("click", passGolden);
imageFour.addEventListener("click", passRottie);

imageZero.addEventListener("click",QuizResponse);
imageOne.addEventListener("click", QuizResponse);
imageTwo.addEventListener("click", QuizResponse);
imageThree.addEventListener("click", QuizResponse);
imageFour.addEventListener("click", QuizResponse);

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
}
