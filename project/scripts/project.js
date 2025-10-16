const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>🦋Joshua Conde Pérez🦋Colombia`;

const lastModifiedDate = document.lastModified;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;

//Carousel

const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});






/*form*/

if (window.location.pathname.includes("review.html")) {
    const visitsDisplay = document.querySelector(".visits");
    let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
    numReviews++;
    localStorage.setItem("numReviews", numReviews);
    visitsDisplay.textContent = numReviews;
}