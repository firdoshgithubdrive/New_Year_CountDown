const daysNew = document.getElementById("days");
const hoursNew = document.getElementById("hours");
const minsNew = document.getElementById("mins");
const secondsNew = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysNew.innerHTML = days;
    hoursNew.innerHTML = formatTime(hours);
    minsNew.innerHTML = formatTime(mins);
    secondsNew.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);