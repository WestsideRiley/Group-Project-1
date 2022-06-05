var startBtn = document.querySelector('#startQuiz')
var zipCode = document.querySelector('#zipcode')
var searchBtn = document.querySelector('#submitZipCode')
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
searchBtn.addEventListener('click', findShelters)
btn0.addEventListener('click', passAussie)
btn1.addEventListener('click', passBulldog)
btn2.addEventListener('click', passChihuahua)
btn3.addEventListener('click', passGolden)
btn4.addEventListener('click', passRottie)
var quiz = document.getElementById('quiz');
var shelterSearch = document.getElementById('shelterSearch');

var breedName = document.getElementById('breedName');

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

var zip =document.getElementById("shelter-search");
var result = document.getElementById("matchBreed");

function quizResponse(){
    quiz.style.display = 'none';
    result.style.display = 'inline-block';
    zip.style.display="inline-block";
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

        breedName.innerHTML="Australian Shepherd";
        breedFacts.innerHTML=
        console.log("aussie");
quizResponse();

document.getElementById("breedName").append("Australian Shepherd");
document.getElementById("submitZipcode").addEventListener("click", SearchAussie);
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
        breedName.innerHTML="English Bulldog";
        breedFacts.innerHTML=
        quizResponse();

document.getElementById("breedName").append("English Bulldog");
document.getElementById("submitZipcode").addEventListener("click", SearchBulldog);
        
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
        breedName.innerHTML="Chihuahua";
        breedFacts.innerHTML=
        quizResponse();

document.getElementById("breedName").append("Chihuahua");
document.getElementById("submitZipcode").addEventListener("click", SearchChihuahua);
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
        breedName.innerHTML="Golden Retriever";
        breedFacts.innerHTML=
        quizResponse();

document.getElementById("breedName").append("Golden Retriever");
document.getElementById("submitZipcode").addEventListener("click", SearchGolden);
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
        breedName.innerHTML="Rottweiler";
        breedFacts.innerHTML=
        quizResponse();

document.getElementById("breedName").append("Rottweiler");
document.getElementById("submitZipcode").addEventListener("click", SearchRottie);
}

// function searchButton() {
//     result.style.display = 'none';
//     shelterSearch.style.display = 'inline-block';

//     findShelters();
// }

function findShelters(event) {
    event.preventDefault();
    console.log('working');
    var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById('enter-zipcode').value;
console.log(postcode);
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {
	return resp.json();

}).then(function (data) {
	console.log('token', data);
	return fetch(`https://api.petfinder.com/v2/organizations?location=${postcode}`,  {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	
	return resp.json();

}).then(function (data) {

	
	console.log('pets', data);

}).catch(function (err) {

	
	console.log('something went wrong', err);

});
}

//functions for pinging the secondapi once the zipcode button is hit
{
function SearchAussie(){
  var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById("zipcode").value; 
var breed= "Australian Shepherd"

if (postcode===null){
  document.getElementById()
}

fetch('https://api.petfinder.com/v2/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
}
}).then(function (resp) {
return resp.json();

}).then(function (data) {
console.log('token', data);
return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {


return resp.json();

}).then(function (data) {


console.log('pets', data);

}).catch(function (err) {


console.log('something went wrong', err);

});
}

function SearchBulldog(){
  var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById("zipcode").value; 
var breed= "English Bulldog"

if (postcode===null){
  document.getElementById()
}

fetch('https://api.petfinder.com/v2/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
}
}).then(function (resp) {
return resp.json();

}).then(function (data) {
console.log('token', data);
return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {


return resp.json();

}).then(function (data) {


console.log('pets', data);

}).catch(function (err) {


console.log('something went wrong', err);

});
}

function SearchChihuahua(){
  var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById("zipcode").value; 
var breed= "Chihuahua"

if (postcode===null){
  document.getElementById()
}

fetch('https://api.petfinder.com/v2/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
}
}).then(function (resp) {
return resp.json();

}).then(function (data) {
console.log('token', data);
return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {


return resp.json();

}).then(function (data) {


console.log('pets', data);

}).catch(function (err) {


console.log('something went wrong', err);

});
}

function SearchGolden(){
  var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById("zipcode").value; 
var breed= "Golden Retriever"

if (postcode===null){
  document.getElementById()
}

fetch('https://api.petfinder.com/v2/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
}
}).then(function (resp) {
return resp.json();

}).then(function (data) {
console.log('token', data);
return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {


return resp.json();

}).then(function (data) {


console.log('pets', data);

}).catch(function (err) {


console.log('something went wrong', err);

});
}

function SearchRottie(){
  var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= document.getElementById("zipcode").value; 
var breed= "Rottweiler"

if (postcode===null){
  document.getElementById()
}

fetch('https://api.petfinder.com/v2/oauth2/token', {
method: 'POST',
body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
headers: {
  'Content-Type': 'application/x-www-form-urlencoded'
}
}).then(function (resp) {
return resp.json();

}).then(function (data) {
console.log('token', data);
return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {


return resp.json();

}).then(function (data) {


console.log('pets', data);

}).catch(function (err) {


console.log('something went wrong', err);

});
}
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



