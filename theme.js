const body = document.querySelector("body").style;
const main = document.querySelector(".main").style;
const radiostream = document.querySelector(".radiostream").style;
const btns = document.querySelector("button").style;
const birds = document.querySelector(".birds").style;
const cairo = document.querySelector(".cairo").style;
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
  }
}, 1000);
