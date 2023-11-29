document.addEventListener("DOMContentLoaded", function () {
  const btnToggle = document.getElementById("btnToggle");
  const infoBlocks = document.querySelectorAll(".info-block");

  let currentIndex = 0;

  btnToggle.addEventListener("click", function () {
    infoBlocks[currentIndex].style.display = "none";

    currentIndex = (currentIndex + 1) % infoBlocks.length;

    infoBlocks[currentIndex].style.display = "block";
  });
});
