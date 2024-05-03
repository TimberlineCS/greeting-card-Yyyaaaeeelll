
let footballPlayers = ["William", "Charles", "Henry", "James", "Thomas", "Noah"];

var williamGoals = 0;
var charlesGoals = 0;
var henryGoals = 0;
var jamesGoals = 0;
var thomasGoals = 0;
var noahGoals = 0;
var yellowCardCount = 0;
var redCardCount = 0;

var userInput;
var userInputSearch;
  var button = document.createElement("button");
    button.style.top = "100px";
  button.style.right = "950px";
  button.style.width = "300px";
  button.style.height = "100px";
  button.style.position = "absolute";
  button.innerHTML="Goal!!";

  button.addEventListener('click', function() {
    userInput = prompt('Who scored the goal?');
    console.log(userInput);
  });

  document.body.append(button);


//second

var buttonTwo = document.createElement("button");
buttonTwo.style.top = "250px";
buttonTwo.style.right = "950px";
buttonTwo.style.width = "300px";
buttonTwo.style.height = "100px";
buttonTwo.style.position = "absolute";
buttonTwo.innerHTML="Foul";

buttonTwo.addEventListener('click', function() {
const userInputTwo = prompt('Who fouled?');
console.log(userInputTwo);
});

document.body.append(buttonTwo);

//third

var buttonThree = document.createElement("button");
buttonThree.style.top = "450px";
buttonThree.style.right = "950px";
buttonThree.style.width = "300px";
buttonThree.style.height = "100px";
buttonThree.style.position = "absolute";
buttonThree.innerHTML="Yellow card";

buttonThree.addEventListener('click', function() {
var userInputThree = prompt('Who got a yellow card?');
yellowCardCount = yellowCardCount + userInputThree;
yellowCount.innerHTML = "Yellow card count: " + yellowCardCount;


console.log(userInputThree);

});

document.body.append(buttonThree);
//yellow count
var yellowCount = document.createElement("div"); 

yellowCount.innerHTML = "Yellow card count: ";
yellowCount.style.top = "570px";
yellowCount.style.right = "1100px";
yellowCount.style.position = "absolute";
yellowCount.style.color = "black";
yellowCount.style.fontSize = "1em";
yellowCount.style.fontFamily = "Candela";
document.body.append(yellowCount);

//four

var orangeCount = document.createElement("div"); 
orangeCount.innerHTML = "RED card count: ";
orangeCount.style.top = "770px";
orangeCount.style.right = "1100px";
orangeCount.style.position = "absolute";
orangeCount.style.color = "black";
orangeCount.style.fontSize = "1em";
orangeCount.style.fontFamily = "Candela";
document.body.append(orangeCount);

var buttonFour = document.createElement("button");
buttonFour.style.top = "650px";
buttonFour.style.right = "950px";
buttonFour.style.width = "300px";
buttonFour.style.height = "100px";
buttonFour.style.position = "absolute";
buttonFour.innerHTML="Red card";

buttonFour.addEventListener('click', function() {
const userInputFour = prompt('Who got a RED card?');
redCardCount = redCardCount + userInputFour;
orangeCount.innerHTML = "RED card count: " + redCardCount;
console.log(userInputFour);
});

document.body.append(buttonFour);
document.body.style.backgroundColor = "#98eb86";

var text = document.createElement("div"); 
var background = document.createElement("div"); 

text.innerHTML = "Home: ";
text.style.top = "70px";
text.style.right = "400px";
text.style.position = "absolute";
text.style.color = "black";
text.style.fontSize = "2em";
text.style.fontFamily = "Candela";

// //two
var text_two = document.createElement("div"); 

text_two.innerHTML = "Visting: ";


    text_two.style.top = "270px";
    text_two.style.right = "400px";
    text_two.style.position = "absolute";

text_two.style.color = "black";

text_two.style.fontSize = "2em";

text_two.style.fontFamily = "Candela";
//three
var textThree = document.createElement("div"); 
textThree.innerHTML = "William, Charles, Henry ";
textThree.style.top = "120px";
textThree.style.right = "330px";
textThree.style.position = "absolute";
textThree.style.color = "black";
textThree.style.fontSize = "1em";
textThree.style.fontFamily = "Candela";
document.body.append(textThree);

//four
var textFour = document.createElement("div"); 
textFour.innerHTML = "James, Thomas, Noah ";
textFour.style.top = "320px";
textFour.style.right = "330px";
textFour.style.position = "absolute";
textFour.style.color = "black";
textFour.style.fontSize = "1em";
textFour.style.fontFamily = "Candela";
document.body.append(textFour);

//five
var textFive = document.createElement("div"); 
textFive.innerHTML = " ";
textFive.style.top = "470px";
textFive.style.right = "270px";
textFive.style.position = "absolute";
textFive.style.color = "black";
textFive.style.fontSize = "1em";
textFive.style.fontFamily = "Candela";
document.body.append(textFive);

//six
var textSix = document.createElement("div"); 
textSix.innerHTML = "Match Stats Manager";
textSix.style.top = "50px";
textSix.style.right = "100px";
textSix.style.color = "black";
textSix.style.fontSize = "4em";
textSix.style.fontFamily = "Candela";
document.body.append(textSix);



//search up
var search = document.createElement("button");
search.style.top = "450px";
search.style.right = "450px";
search.style.width = "200px";
search.style.height = "70px";
search.style.position = "absolute";
search.innerHTML="Search up player";

search.addEventListener('click', function() {
    userInputSearch = prompt('What player are you searching up?');
    console.log(userInputSearch);
    if (userInputSearch === "William") {
    textFive.innerHTML = userInputSearch +" scored " + williamGoals +" goals";
  }

  if (userInputSearch === "Charles") {
    textFive.innerHTML = userInputSearch +" scored " + charlesGoals +" goals";
  }

  if (userInputSearch === "Henry") {
    textFive.innerHTML = userInputSearch +" scored " + henryGoals +" goals";
  }

  if (userInputSearch === "James") {
    textFive.innerHTML = userInputSearch +" scored " + jamesGoals +" goals";
  }

  if (userInputSearch === "Thomas") {
    textFive.innerHTML = userInputSearch +" scored " + thomasGoals +" goals";
  }

  if (userInputSearch === "Noah") {
    textFive.innerHTML = userInputSearch +" scored " + noahGoals +" goals";
  }
});

  document.body.append(search);


document.body.append(text);
document.body.append(text_two);

document.body.append(background);


var visitScore = 0;
text_two.innerHTML = "Visiting: " + visitScore;

var homeScore = 0;
button.addEventListener('click', function() {
    if (userInput === "William") {
  homeScore = homeScore + 1;
  williamGoals = williamGoals + 1;
  visitScore = visitScore + 0;
  text.innerHTML = "Home: " + homeScore;
console.log("Home set + 1");
    }

if (userInput === "Henry") {
    homeScore = homeScore + 1;
    henryGoals = henryGoals + 1;
    visitScore = visitScore + 0;
    text.innerHTML = "Home: " + homeScore;
  console.log("Home set + 1");
  
}
if (userInput === "Charles") {
    homeScore = homeScore + 1;
    charlesGoals = charlesGoals + 1;
    visitScore = visitScore + 0;
    text.innerHTML = "Home: " + homeScore;
  console.log("Home set + 1");
  
}

});


button.addEventListener('click', function() {
if (userInput === "James") {
    visitScore = visitScore + 1;
    jamesGoals = jamesGoals + 1;
    homeScore = homeScore + 0;
    text_two.innerHTML = "Visiting: " + visitScore;
  console.log("Visit set + 1");
  
}

if (userInput === "Thomas") {
    visitScore = visitScore + 1;
    thomasGoals = thomasGoals + 1;
    homeScore = homeScore + 0;
    text_two.innerHTML = "Visiting: " + visitScore;
  console.log("Visit set + 1");
  
}

if (userInput === "Noah") {
    visitScore = visitScore + 1;
    noahGoals = noahGoals + 1;
    homeScore = homeScore + 0;
    text_two.innerHTML = "Visiting: " + visitScore;
  console.log("Visit set + 1");
  
}

});


var fouls = 0;
var yellow = 0;
var red = 0;


