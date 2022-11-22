AOS.init(); // Initialize javaScript animation library
let about = document.getElementById('about');
let slides = document.getElementsByClassName("mySlides");
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {           
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let ol = document.querySelector('ol');

let dropdown = document.getElementById('dropdown');


[about, dropdown].map(element => {
  element.addEventListener("click", ()=>{
    if(ol.style.display == "none") {
      ol.style.display = "block";
    } else {
      ol.style.display = "none";
    }
  })
});
let goup = document.getElementById("go-up");
let hamburger = document.getElementById("hamburger");
let hero = document.getElementById("hero_img");
let ul = document.getElementById("ul");
let close = document.getElementById("ul-l2");
let logo = document.getElementById("ul-l1");

hamburger.addEventListener("click", function(){
    ul.style.transition = "0.5s all";
   ul.style.transform = "translateY(0%)";
   hero.style.display = "none";
})

close.addEventListener("click", function(){
  hero.style.display = "block";
    ul.style.transform = "translateY(150%)";
})

logo.addEventListener("click", function(){
    window.open("../index.html", "_self")
})


goup.addEventListener('click', function(){
  window.scrollTo(0, 150);
})
