var clickable = document.querySelector(".share-icon-button");

clickable.addEventListener("click", function() {

  this.classList.toggle("active");
  document.querySelector(".share-div").classList.toggle("hidden");
})
