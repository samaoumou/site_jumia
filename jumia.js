 /* pour changer les photos  à l'aide d'un simple clique dans les deux bouttons */
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
    if (pos == 130) {
      clearInterval(id);
    } else {
      pos++;  
      elem.style.left = pos + 'px'; 
    }
  }
}
a++;
}
/* function scro() {
  window.scrollTo(200, 0);
}
function scrol() {
  window.scrollTo(0, 200);
} */
/* const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
  if(window.pageYOffset>100){
    toTop.classList.add('active');
  }
  else{
    toTop.classList.remove('active');
  }
} */
/* cette fonction gere les slides en bas */
function myMove(direction){
  var direction;
  if(direction == 1){
    const move = document.getElementById("myAnimation");
    move.classList.remove("aniRight");
    move.classList.add("aniLeft");
  }
  if(direction==2){
    const move = document.getElementById("myAnimation");
    move.classList.remove("aniLeft");
    move.classList.add("aniRight");
  }
}
window.onload = autoDisplay;

function bigImg(x) {
  x.style.height = "34px"; 
  /* x.style.width = "64px"; */
  x.style.color="red";
}
function normalImg(x) { /* changement de couleur */
  x.style.height = "auto";
  x.style.width = "auto";
  x.style.color="black";
}
function bigImg1(x) {
  x.style.height = "34px"; 
  /* x.style.width = "64px"; */
  x.style.color="blue";
}
