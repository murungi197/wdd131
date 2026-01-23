/* Step 1: Footer Dates */
const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperature = 24; // Celsius
const windSpeed = 10;   // km/h

document.querySelector("#temp").textContent = temperature;
document.querySelector("#wind").textContent = windSpeed;

function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

/* Step 4: Apply Conditions */
const chillSpan = document.querySelector("#chill");

if (temperature <= 10 && windSpeed > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  chillSpan.textContent = "N/A";
}
