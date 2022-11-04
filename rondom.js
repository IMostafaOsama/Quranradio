const stars2 = document.querySelector(".stars2").style;

setInterval(() => {
  min = Math.ceil(1);
  max = Math.floor(70);
  righting = Math.floor(Math.random() * (max - min) + min);
  stars2.opacity = "100%";
  stars2.right = "" + righting + "vh";
  console.log(righting);
}, 10000);
setInterval(() => {
  stars2.opacity = "0%";
}, 1999);

/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/
