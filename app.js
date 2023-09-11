let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hr = 0;
let min = 0;
let sec = 0;

if (sec > 9) {
  second.innerHTML = sec;
}
if (sec === 60) {
  min++;
  minute.innerHTML = "0" + min;
  sec = 0;
  second.innerHTML = "0" + sec;
}
if (min > 9) {
  minute.innerHTML = min;
}
if (min === 60) {
  hr++;
  hour.innerHTML = "0" + hr;
  min = 0;
  minute.innerHTML = "0" + min;
}

let startInterval;

startBtn.addEventListener("click", function () {
  startInterval = setInterval(() => {
    sec++;
    second.innerHTML = "0" + sec;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled=false;
  resetBtn.disabled=false;
});

stopBtn.addEventListener("click", function () {
  hour.innerHTML = "0" + hr;
  minute.innerHTML = "0" + min;
  second.innerHTML = "0" + sec;
  clearInterval(startInterval);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", function () {
  hr = 0;
  min = 0;
  sec = 0;

  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
  clearInterval(startInterval);

  
  startBtn.disabled = false;
  stopBtn.disabled = false;
});
