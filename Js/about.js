const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".about-img");
  const images = ["./hero-bcg.jpeg" ];
  let currentImageIndex = 0;

  function updateImage() {
    imageContainer.innerHTML = `<img src="${images[currentImageIndex]}" alt="" />`;
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  }

  updateImage();

  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("slider");
  const images = document.querySelectorAll("#slider img");
  let currentImageIndex = 0;

  function hideAllImages() {
    images.forEach((img) => (img.style.display = "none"));
  }

  function showCurrentImage() {
    hideAllImages();
    images[currentImageIndex].style.display = "block";
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showCurrentImage();
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showCurrentImage();
  }

  showCurrentImage();

  const nextButton = document.getElementById("nextBtn");
  const prevButton = document.getElementById("prevBtn");

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
  } else {
    console.error("Next or previous button not found.");
  }

  function autoShowNextSlide() {
    showNextImage();
  }

  setInterval(autoShowNextSlide, 2000);
});
