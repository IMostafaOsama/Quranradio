const body = document.querySelector("body").style;
const main = document.querySelector(".main").style;
const radiostream = document.querySelector(".radiostream").style;
const btns = document.querySelector("button").style;
const birds = document.querySelector(".birds").style;
const cairo = document.querySelector(".cairo").style;
const clouds = document.querySelector(".clouds").style;
const stars = document.querySelector(".stars").style;
const greatingmsg = document.querySelector(".greatingmsg");

setInterval(() => {
  hrs = new Date().toString().split(" ")[4].split(":")[0];
  console.log(hrs);
  if (hrs >= 6 || hrs <= 18) {
    greatingmsg.innerHTML = "صباح الخير";
    greatingmsg.style.color = "black";
    body.backgroundColor = "white";
    body.color = "black";
    main.borderColor = "black";
    btns.backgroundColor = "black";
    btns.color = "white";
    birds.filter = "brightness(0%)";
    cairo.filter = "brightness(0%)";
    birds.display = "block";
    clouds.display = "block";
    stars.display = "none";
  } else {
    greatingmsg.innerHTML = "مساء الخير";
    greatingmsg.style.color = "white";
    body.backgroundColor = "black";
    body.color = "white";
    main.borderColor = "white";
    btns.backgroundColor = "white";
    btns.color = "black";
    birds.filter = "brightness(500%)";
    cairo.filter = "brightness(500%)";
    birds.display = "none";
    clouds.display = "none";
    stars.display = "block";
  }
}, 1000);
