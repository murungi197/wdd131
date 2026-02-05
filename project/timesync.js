const clock = document.getElementById("clock");
const ampm = document.getElementById("ampm");
const toggleBtn = document.getElementById("toggleFormat");
const alarmInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const stopAlarmBtn = document.getElementById("stopAlarm");
const statusText = document.getElementById("status");
const alarmSound = document.getElementById("alarmSound");
const themeToggle = document.getElementById("themeToggle");


let is24Hour = true;
let alarmTime = null;
let alarmActive = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "";

  if (!is24Hour) {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  ampm.textContent = is24Hour ? "" : period;

  if (alarmActive && alarmTime === `${hours}:${minutes}`) {
    alarmSound.play();
    statusText.textContent = "⏰ Alarm ringing!";
  }
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});

setAlarmBtn.addEventListener("click", () => {
  if (alarmInput.value) {
    alarmTime = alarmInput.value;
    alarmActive = true;
    statusText.textContent = `Alarm set for ${alarmTime}`;
  }
});

stopAlarmBtn.addEventListener("click", () => {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alarmActive = false;
  statusText.textContent = "Alarm stopped";
});

setInterval(updateClock, 1000);
updateClock();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

