// Get the list of items and the button
const itemList = document.getElementById('list');
const showMoreButton = document.getElementById('show-more-button');
const hiddenElements = document.querySelectorAll('.hidden')
showMoreButton.onclick = () => {
  hiddenElements.forEach(element=>{
    element.classList.remove("hidden");
    element.style.opacity = 1;
  })
  showMoreButton.style.display = 'none';
  hiddenElements[hiddenElements.length - 1].scrollIntoView({ behavior: 'smooth' })
}
