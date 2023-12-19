//Yael
//1st 
//Decemeber 12 2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */

document.body.style.backgroundColor = "#AA0000";


var background = document.createElement("div"); 
var hat = document.createElement("div");
var head = document.createElement("div") 
var hatTwo = document.createElement("div");
var headTwo = document.createElement("div") 
var text = document.createElement("div"); 
var eye = document.createElement("div");

background.style.width = "98%";
background.style.backgroundColor = "#AA0000";
background.style.padding = "30px";
background.style.radius = "50px";

text.innerHTML = "Happy Holidays!";

text.style.background = "#AA0000";

text.style.color = "white";

text.style.textAlign = "center";

text.style.fontSize = "6em";

text.style.fontFamily = "fantasy";

hat.style.width = "0px";

hat.style.height = "0px";

hat.style.border = "transparent solid 50px";

hat.style.border.BottomWidth = "200px";

hat.style.borderBottomColor = "red";

hat.style.margin = "0 auto";

hat.style.position = "relative";

hat.style.top = "15px";
head.style.width = "100px";

head.style.height = "100px"

head.style.borderRadius = "50%";

head.style.backgroundColor = "tan";

head.style.margin = "0 auto";

document.body.append(text);
document.body.append(background);
document.body.append(hat);
document.body.append(head);

 //
hatTwo.style.width = "0px";

hatTwo.style.height = "0px";

hatTwo.style.border = "transparent solid 50px";

hatTwo.style.border.BottomWidth = "200px";

hatTwo.style.borderBottomColor = "red";

hatTwo.style.margin = "0 auto";

hatTwo.style.position = "relative";

hatTwo.style.top = "15px";

headTwo.style.width = "100px";

headTwo.style.height = "100px"

headTwo.style.borderRadius = "50%";

headTwo.style.backgroundColor = "tan";

headTwo.style.margin = "0 auto";

document.body.append(text);
document.body.append(background);
document.body.append(hatTwo);
document.body.append(headTwo);

var au = new Audio("Music/AllIWantForChristmas.mp3");
au.controls = true;
au.style.zIndex = 5;
document.body.appendChild(au);
//second person ends here

//Fire
var fire = document.createElement("img") ;
fire.src = "Images/fire.gif" ;  
fire.style.width = "980px";
fire.style.height = "90px";
fire.style.position = "absolute";
fire.style.top = "360px";
fire.style.left = "100px";
document.body.append(fire);

//Moons
var moon = document.createElement("img") ;
moon.src = "Images/moon.gif" ;  
moon.style.width = "160px";
moon.style.height = "160px";
moon.style.position = "absolute";
moon.style.top = "45px";
moon.style.left = "1070px";
document.body.append(moon);

var moonTwo = document.createElement("img") ;
moonTwo.src = "Images/moon2.gif" ;  
document.body.append(moonTwo);
moonTwo.style.width = "150px";
moonTwo.style.height = "150px";
moonTwo.style.position = "absolute";
moonTwo.style.top = "50px";
moonTwo.style.left = "50px";

//Snow
var snow = document.createElement("img") ;
snow.src = "Images/FallingSnowTransparent.gif" ;  
snow.style.position = "absolute";
snow.style.top = "10px";
snow.style.left = "10px";
snow.style.width = "1300px";
snow.style.height = "1300px";
snow.style.zIndex = -1;
document.body.append(snow);

//elf
var elf = document.createElement("img") ;
elf.src = "Images/elf.gif" ;  
elf.style.position = "absolute";
elf.style.top = "300px";
elf.style.left = "970px";
elf.style.width = "400px";
elf.style.height = "400px";
document.body.append(elf);

//Border
document.body.style.border = "dotted";
document.body.style.borderColor = "green";
document.body.style.width = "%100";
document.body.style.height = "%300";
document.body.style.borderWidth = "2em";

//box
var box = document.createElement("div");
box.style.width = "50px";
box.style.height = "50px";
box.style.border = "white solid 5px";
box.style.backgroundColor = "#6fdb27"
box.style.top = "534px";
box.style.left = "615px";
box.style.borderRadius = "20%"
box.id = "box";
box.style.position = "absolute";
document.body.append(box);