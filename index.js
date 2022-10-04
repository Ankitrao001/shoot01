const bloodSpot = document.querySelector(".bloodSpot");
const container = document.querySelector(".container");
const startBtn = document.querySelector(".startBtn");
const span = document.getElementById("span");
const terr = document.createElement("img");

var suc = new Audio("suc.mp3");
var audio = new Audio("shot.mp3");
var audio1 = new Audio("back.mp3");
var audio2 = new Audio("won.wav");

let ends = new Audio("end.wav")
let score = 0;

terr.setAttribute("class", "terr");
terr.setAttribute("src", "./terr.png");
terr.style.height = "250px";
const heightc = container.offsetHeight;
const widthc = container.offsetWidth;
function play() {


  document.getElementById("left").innerHTML = "KILLS TO WIN : 15";

  container.appendChild(terr);
  audio1.play();
  setInterval(() => {
    const Top = Math.random() * (heightc - 100);
    const Left = Math.random() * (widthc - 100);
    terr.style.position = "absolute";
    terr.style.top = Top + "px";
    terr.style.left = Left + "px";
  }, 1000);




  window.addEventListener("click", (e) => {
    bloodSpot.style.top = e.pageY + "px";
    bloodSpot.style.left = e.pageX + "px";
    document.body.style.cursor = 'none';
    audio.play();
    audio1.play()
    if (e.target === terr) {
      audio2.play();
      score = score + 1;
      startBtn.innerHTML = "score:" + score;

      document.getElementById("left").innerHTML = "KILLS LEFT:" + parseInt(15 - score);
    }

    else {
      startBtn.innerHTML = "MISSED  &#128558";
    }
    if (score === 5) {


      span.innerHTML = "doing good";
      suc.play()
      score = score + 2;
      startBtn.innerHTML = "score:" + score;

      document.getElementById("left").innerHTML = "KILLS LEFT:" + parseInt(15 - score);

      let star = document.getElementById("star");
      star.style.display = "block";
      star.innerHTML = "extra 2 points earned";
      span.style.display = "block";
    }

    if (score === 8) {
      suc.pause()
      span.style.display = "none";
      star.style.display = "none";
    }
    if (score === 10) {
      star.style.display = "block";
      span.innerHTML = "nice ";
      suc.play()
      score = score + 2;
      startBtn.innerHTML = "score:" + score;

      document.getElementById("left").innerHTML = "KILLS LEFT:" + parseInt(15 - score);
      suc.play()
      star.innerHTML = "extra 3 points earned";
      span.style.display = "block";
    }

    if (score === 13) {
      suc.pause();
      span.style.display = "none";
      star.style.display = "none";

    }
    if (score === 15) {
      let resultnext = document.querySelector(".result");
      resultnext.innerHTML = "WINNER";
      resultnext.style.display = "block";
      audio.pause();
      audio1.pause();
      terr.style.display = 'none';
      span.style.display = "none";
      star.style.display = "none";
      startBtn.innerHTML = "score:" + score;

    }





  });


  const cursor = document.querySelector(".cursor");
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });



}

function stop() {

  location.reload();
}

function clock() {

  const time = document.querySelector(".time");
  let timesecond = 59;
  displaytime(timesecond);
  let countdown = setInterval(() => {
    timesecond--;
    displaytime(timesecond);
    if (timesecond <= 0 || timesecond < 1) {
      endtime();
      clearInterval(timesecond);

      if (score < 15) {
        let result = document.querySelector(".result");
        result.innerHTML = "YOU LOSE";
        result.style.display = "block";
        audio.pause();
        terr.style.display = 'none';
        span.style.display = "none";
        startBtn.innerHTML = "score:" + score;

        star.style.display = "none";

      }


    }
    if (score === 15) {
      clearInterval(countdown);

    }
  }, 1000);
  function displaytime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    time.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`

  }
  function endtime() {
    time.innerHTML = 'TIME OUT';

    audio1.pause();



  }

  //  if(setInterval)



}