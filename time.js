let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const staions = document.querySelector(".staions");

let hour = 00;
let minute = 00;
let second = 00;

function selectstasion() {
  if (
    staions.value == "cairostation" &&
    document.querySelector(".stop").style.display == "inline-block"
  ) {
    audio.play();
    audio2.pause();
    audio4.pause();
    audio5.pause();
    document.querySelector(".cairo").style.display = "block";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "none";
  } else if (
    staions.value == "saudistation" &&
    document.querySelector(".stop").style.display == "inline-block"
  ) {
    audio.pause();
    audio2.play();
    audio4.pause();
    audio5.pause();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "block";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "none";
  } else if (
    staions.value == "maroccostation" &&
    document.querySelector(".stop").style.display == "inline-block"
  ) {
    audio.pause();
    audio2.pause();
    audio4.play();
    audio5.pause();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "block";
    document.querySelector(".emarat").style.display = "none";
  } else if (
    staions.value == "emaratstation" &&
    document.querySelector(".stop").style.display == "inline-block"
  ) {
    audio.pause();
    audio2.pause();
    audio4.pause();
    audio5.play();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "block";
  }
}

function start() {
  timer = true;
  stopWatch();
  if (staions.value == "cairostation") {
    audio.play();
    audio2.pause();
    audio4.pause();
    audio5.pause();
    document.querySelector(".cairo").style.display = "block";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "none";
  } else if (staions.value == "saudistation") {
    audio.pause();
    audio2.play();
    audio4.pause();
    audio5.pause();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "block";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "none";
  } else if (staions.value == "maroccostation") {
    audio.pause();
    audio2.pause();
    audio4.play();
    audio5.pause();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "block";
    document.querySelector(".emarat").style.display = "none";
  } else if (staions.value == "emaratstation") {
    audio.pause();
    audio2.pause();
    audio4.pause();
    audio5.play();
    document.querySelector(".cairo").style.display = "none";
    document.querySelector(".saudi").style.display = "none";
    document.querySelector(".marocco").style.display = "none";
    document.querySelector(".emarat").style.display = "block";
  }
  document.querySelector(".start").style.display = "none";
  document.querySelector(".stop").style.display = "inline-block";
  document.querySelector(".waves").style.display = "inline-block";
}

function stop() {
  timer = false;

  audio.pause();
  audio2.pause();
  audio4.pause();
  audio5.pause();

  document.querySelector(".stop").style.display = "none";
  document.querySelector(".start").style.display = "inline-block";
  document.querySelector(".waves").style.display = "none";
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
