const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
document.querySelector('.last-modified').textContent = `Last Access: ${formattedDate}`;


const temperatureC = 10; // Temperature in °C
const windSpeedKmH = 6; // Wind speed in km/h

function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}
function displayWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        return `${windChill.toFixed(2)} °C`; 
    } else {
        return "N/A";
    }
}

const windChillOutput = displayWindChill(temperatureC, windSpeedKmH);
console.log(`Wind Chill: ${windChillOutput}`);
document.querySelector(".weather-section ol").insertAdjacentHTML(
    "beforeend",
    `<li>Wind Chill: ${windChillOutput}</li>`
);
