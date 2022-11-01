let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
const audio = document.getElementById("audio");

let hour = 00;
let minute = 00;
let second = 00;

function start() {
  timer = true;
  stopWatch();
  audio.play();

  document.querySelector(".start").style.display = "none";
  document.querySelector(".stop").style.display = "inline-block";
}

function stop() {
  timer = false;

  audio.pause();

  document.querySelector(".stop").style.display = "none";
  document.querySelector(".start").style.display = "inline-block";
}

function stopWatch() {
  if (timer) {
    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secString = second;

    if (hour < 10) {
      hrString = "0" + hrString;
    }

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    document.getElementById("stopwatchhours").innerHTML = hrString;
    document.getElementById("stopwatchminuts").innerHTML = minString;
    document.getElementById("stopwatchseconds").innerHTML = secString;
    setTimeout(stopWatch, 1000);
  }
}
