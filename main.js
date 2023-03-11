// Get the list of items and the button
const itemList = document.getElementById('list');
const showMoreButton = document.getElementById('show-more-button');
const hiddenElements = document.querySelectorAll('.hidden')
showMoreButton.onclick = () => {
  hiddenElements.forEach(element=>{
    element.classList.remove("hidden");
  })
  showMoreButton.style.display = 'none';
  hiddenElements[hiddenElements.length - 1].scrollIntoView({ behavior: 'smooth' })
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.querySelectorAll(".gallery-slide img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
  plusSlide(1);
}, 15000);