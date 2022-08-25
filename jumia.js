 /* pour changer les boutton à l'aide d'un simple clique dans les deux bouttons */
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
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