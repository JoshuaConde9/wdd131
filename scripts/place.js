const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");
const today = new Date();
year.innerHTML = `©<span class="highlight">${today.getFullYear()}</span>🦋Joshua Conde Pérez🦋Colombia`;

const lastModifiedDate = document.lastModified;
lastModified.textContent = `Last Modified: ${lastModifiedDate}`;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature)) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16))
}

const temperatureHTML = document.getElementById("temperature").textContent;
const windSpeedHTML = document.getElementById("windspeed").textContent;

const temperature = parseFloat(temperatureHTML);
const windSpeed = parseFloat(windSpeedHTML);






let output;

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    output = `${windChill.toFixed(2)} °C`;
}
else {
    output = "N/A";
}

document.getElementById("windchill").textContent = output;
