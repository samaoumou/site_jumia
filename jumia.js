 /* pour changer les boutton à l'aide d'un simple clique dans les deux bouttons */
var slideIndex = 1;            /* initialiser le compteur à 1 */
showDivs(slideIndex);           /* appelle directe de la fonction showDivs */
function plusDivs(n) {  /* déclaration de la fonction plusdivs qui pendra comme n en parametre 
et d'affiche les deux états comme apres ou précédent */
showDivs(slideIndex += n); /* rappelle de la fonction showDivs qui maintenant prend en parametre
slideIndex = slideIndex +n --> les index des slide s'incrémentent de n */
}
function showDivs(n) {                    /* déclaration de la fonction showDivs et n correspond aux indix de slide */
  var i;
  var x = document.getElementsByClassName("mySlides");  /* recupere tous les éléments qui ont comme class myslide
  et les stocke sous forme de tableau */
  if (n > x.length) {slideIndex = 1}  /* cette condition permet d'affiche le premier élement d'index 1 
  ici on compare les index par rapport à la longueur d'un élément d'une classe*/
  if (n < 1) {slideIndex = x.length}    /* cette condition permet d'affiche la valeur précédente */
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  /* ne fait rien pour le style */
  }
  x[slideIndex-1].style.display = "block";  /* affiche moi la valeur du contenu au slide précédente */
}
/* Scroler de façon automatique les images */
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
/* function changerDeCouleur(){
  var blocA=document.getElementsByClassName("souf");
  for(let i=0;i<7;i++){
      blocA[i].classList.toggle("souf1");
  } 
} */
/* function currentDiv(n) {
  showDivs(slideIndex = n);
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
} */
{/* <div class="w3-content w3-display-container" style="max-width:800px">
  <img class="mySlides" src="img_nature_wide.jpg" style="width:100%">
  <img class="mySlides" src="img_snow_wide.jpg" style="width:100%">
  <img class="mySlides" src="img_mountains_wide.jpg" style="width:100%">
  <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
    <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
    <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
    <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
  </div>
</div> */}
function currentDiv(n) {
  showDivs(slideIndex = n);
}

var id = null;
var a=1;
function myMove(n) {
if (a==1){
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;  
      elem.style.left = pos + 'px'; 
    }
  }
}
a++;
}
{/* <div class="bob">
<div id ="myContainer">
<div id ="myAnimation">
	<div class="img">p1</div>
    <div class="img">p2</div>
    <div class="img">p3</div>
    <div class="img">p4</div>
    <div class="img">p5</div>
    <div class="img">p6</div>
</div>    
</div>
</div> */}
/* 
#myContainer {
  width: 400px;
  height: 90px;
  position: relative;
  background: yellow;
  margin-left: 25px;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
}
#myAnimation {
  width: 500px;
  height: 80px;
  position: absolute;
  background-color: red;
  display: flex;
}
.img{
	width: 90px;
    height: 70px;
    margin: 5px;
    background-color: green;}
.bob{ justify-container: center;
width: 700px;
align-items: center;
}     */
