const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>🦋Joshua Conde Pérez🦋Colombia`;

const lastModifiedDate = document.lastModified;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectProduct = document.getElementById("choose-a-product");
if (selectProduct) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.textContent = product.name;
        option.value = product.id;
        selectProduct.appendChild(option);
    });
}

if (window.location.pathname.includes("review.html")) {
    const visitsDisplay = document.querySelector(".visits");
    let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
    numReviews++;
    localStorage.setItem("numReviews", numReviews);
    visitsDisplay.textContent = numReviews;
}