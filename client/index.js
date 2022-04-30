var address = "192.168.1.3";
//var address = '10.248.123.77';
//var address = '192.168.168.171';
// var address = '127.0.0.1';

// All times in seconds
var timer = document.getElementById("timer");
var minorFault = document.getElementById("falta1");
var totalTime = 1200;
var minorFault = 120;
var mayorFault = 300;
var minorFaultPassed = 0;
var startTime = 0;
var timePassed = 0;
var pauseWhen = 1200;
var settime = document.getElementById("setRandometime");

// also need to keep track of time passed whilst paused to offset millis()
var paused = 0; // paused keeps track of how long timer has been paused for
var go = false;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}

function setup() {
  noCanvas();
  startTime = millis();
  timer.innerHTML = convertSeconds(totalTime - timePassed);
}
var interval = setInterval(timeIt, 1000);

function timeIt() {
  if (go) {
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed + paused);
    if (timePassed + pauseWhen === totalTime) {
      clearInterval(interval);
    }
  } else {
    paused++; // add 1 to paused every second whilst paused to offset millis()
  }
}

function play() {
  go = true;
}

function pause() {
  go = false;
}

function reset() {
  paused = 0;
  startTime = millis();
  timePassed = floor((millis() - startTime) / 1000);
  timer.innerHTML = convertSeconds(totalTime - timePassed);
}
function setRandomeTime() {
  paused = 0;
  startTime = millis();
  timePassed = floor((millis() - startTime + settime) / 1000);
  timer.innerHTML = convertSeconds(totalTime - timePassed);
}

var homeScore = 0;
var awayScore = 0;

//All fetches are 'POST', sending data to the server.

async function time(event) {
  try {
    if (event == "play") {
      play();
    } else if (event == "pause") {
      pause();
    } else if (event == "reset") {
      reset();
    } else if (event == "randomeTime") {
      setRandomeTime();
    } else {
      console.log("something is wrong here");
    }
  } catch (error) {
    //console.log("problem");
  }
}
async function setTime(time) {
  try {
    paused = 0;
    totalTime = time;
    startTime = millis();
    timePassed = floor((millis() - startTime) / 1000);
    timer.innerHTML = convertSeconds(totalTime - timePassed);
  } catch (error) {
    // console.log("problem");
  }
}
async function playerNumber(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number1").value;
    document.getElementById("faltaNumber1").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}

async function setFault(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}

async function playerNumber2(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number2").value;
    document.getElementById("faltaNumber2").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}
async function setFault2(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta2.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}

async function playerNumber3(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number3").value;
    document.getElementById("faltaNumber3").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}
async function setFault3(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta3.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}
async function playerNumber4(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number4").value;
    document.getElementById("faltaNumber4").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}
async function setFault4(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta4.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}
async function playerNumber5(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number5").value;
    document.getElementById("faltaNumber5").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}
async function setFault5(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta5.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}
async function playerNumber6(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("number6").value;
    document.getElementById("faltaNumber6").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}
async function setFault6(time) {
  try {
    paused = 0;
    minorFault = time;
    startTime = millis();
    minorFaultPassed = floor((millis() - startTime) / 1000);
    falta6.innerHTML = convertSeconds(minorFault + minorFaultPassed);
  } catch (error) {
    // console.log("problem");
  }
}

//
async function home_plus() {
  try {
    homeScore++;
    document.getElementById("home-score-controls").innerHTML = homeScore;
  } catch (error) {
    //console.log("problem");
  }
}

async function home_minus() {
  try {
    homeScore--;
    document.getElementById("home-score-controls").innerHTML = homeScore;
  } catch (error) {
    //console.log("problem");
  }
}

async function away_plus() {
  try {
    awayScore++;
    document.getElementById("away-score-controls").innerHTML = awayScore;
  } catch (error) {
    //console.log("problem");
  }
}

async function away_minus() {
  try {
    awayScore--;
    document.getElementById("away-score-controls").innerHTML = awayScore;
  } catch (error) {
    //console.log("problem");
  }
}

async function home_name(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("home-name").value;
    document.getElementById("home-team").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}

async function away_name(event) {
  event.preventDefault();
  try {
    let name = document.getElementById("away-name").value;
    document.getElementById("away-team").innerHTML = name;
  } catch (error) {
    //console.log("problem");
  }
}

async function section(period) {
  try {
    document.getElementById("period-controls").innerHTML = period;
  } catch (error) {
    //console.log("problem");
  }
}
