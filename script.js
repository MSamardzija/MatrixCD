// TIME
var countDownDate = new Date("Jan 01, 2022 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    var ex = document.getElementById("main");
    ex.innerHTML = "EXPIRED";
    ex.classList.add("expired");
  }else{
    setInterval(function(){
      location.reload(); 
    }, 900000)
  }
}, 1000);

setInterval(function (){
  const text = String.fromCharCode(Math.random() * 128) + String.fromCharCode(Math.random() * 128);
  document.getElementById("days").innerHTML = text;
}, 1800)

setInterval(function (){
  const text = String.fromCharCode(Math.random() * 128);
  document.getElementById("hours").innerHTML = text;
}, 2200)

setInterval(function (){
  const text = String.fromCharCode(Math.random() * 128) + String.fromCharCode(Math.random() * 128);
  document.getElementById("minutes").innerHTML = text;
}, 2800)

setInterval(function (){
  const text = String.fromCharCode(Math.random() * 128);
  document.getElementById("seconds").innerHTML = text;
}, 3000)