document.getElementById("button").addEventListener("click", passBoxer);
document.getElementById("button2").addEventListener("click", passAfrican);

function passBoxer(){
var requestUrl = 'https://dog.ceo/api/breed/boxer/images/random';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
     console.log(data);
     
    var Dogimg = document.createElement("img");
    Dogimg.src = data.message;
    var Breedimage = document.getElementById("header");
    Breedimage.append(Dogimg);

    for (var i = 0; i < data.length; i++) {
      console.dir(data[i]);
 
    }});
}

function passAfrican(){
    var requestUrl = 'https://dog.ceo/api/breed/african/images/random';
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
         console.log(data);
         
        var Dogimg = document.createElement("img");
        Dogimg.src = data.message;
        var Breedimage = document.getElementById("header");
        Breedimage.append(Dogimg);
    
        for (var i = 0; i < data.length; i++) {
          console.dir(data[i]);
         
        
        }});
    }

    function DisableButtons(){
        document.getElementById("button").disabled = true;
        document.getElementById("button2").disabled = true;
    }

affenpinscher
african
airedale
akita
appenzeller
australian
basenji
beagle
bluetick
borzoi
bouvier
boxer
brabancon
briard
buhund
bulldog
bullterrier
cattledog
chihuahua
chow
clumber
cockapoo
collie
coonhound
corgi
cotondetulear
dachshund
dalmatian
dane
deerhound
dhole
dingo
doberman
elkhound
entlebucher
eskimo
finnish
frise
germanshepherd
greyhound
groenendael
havanese
hound
husky
keeshond
kelpie
komondor
kuvasz
labradoodle
labrador
leonberg
lhasa
malamute
malinois
maltese
mastiff
mexicanhairless
mix
mountain
newfoundland
otterhound
ovcharka
papillon
pekinese
pembroke
pinscher
pitbull
pointer
pomeranian
poodle
pug
puggle
pyrenees
redbone
retriever
ridgeback
rottweiler
saluki
samoyed
schipperke
schnauzer
setter
sheepdog
shiba
shihtzu
spaniel
springer
stbernard
terrier
tervuren
vizsla
waterdog
weimaraner
whippet
wolfhound
