const newYears = "1 jan 2024"

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const day = Math.floor((totalSeconds / 3600) / 24);
    const hour = Math.floor((totalSeconds / 3600) % 24);
    const min = Math.floor((totalSeconds / 60) % 60);
    const second = Math.floor((totalSeconds) % 60);

    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = formatTime(hour);
    document.getElementById("mins").innerHTML = formatTime(min);
    document.getElementById("seconds").innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);



