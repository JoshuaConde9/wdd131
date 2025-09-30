const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>🦋Joshua Conde Pérez🦋Colombia`;

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

const lastModifiedDate = document.lastModified;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;

const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Bogotá Colombia",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/2018/400x250/Sapporo-Japan-Temple01.jpg"
    }
];

let container = document.getElementById("container")

function createTempleCard(temple) {
    let figure = document.createElement("figure");
    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    let caption = document.createElement("figcaption");
    caption.innerHTML = `<span class="label">Location:</span> ${temple.location}<br><span class="label">Dedicated:</span> ${temple.dedicated}<br><span class="label">Size:</span> ${temple.area} sq ft`;

    figure.appendChild(h3);
    figure.appendChild(caption);
    figure.appendChild(img);

    return figure;
}

temples.forEach(temple => {
    container.appendChild(createTempleCard(temple));
});


oldLink.addEventListener("click", () => {
    container.innerHTML = "";
    const oldTemples = temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    oldTemples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
});

newLink.addEventListener("click", () => {
    container.innerHTML = "";
    const newTemples = temples.filter(temple => {
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    newTemples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
});

largeLink.addEventListener("click", () => {
    container.innerHTML = "";
    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });
    largeTemples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
});

smallLink.addEventListener("click", () => {
    container.innerHTML = "";
    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });
    smallTemples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
});

homeLink.addEventListener("click", () => {
    temples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
});