const daysCard = document.querySelector(".days");
const hoursCard = document.querySelector(".hours");
const minutesCard = document.querySelector(".minutes");
const secondsCard = document.querySelector(".seconds");

///Get time for 5 days from now

//function to add days to a date

function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}

//current date

const currentDate = new Date();

//line below this is to test countdown time of 5 seconds

const test = currentDate.getTime() + 600000;

//countdown date (5 days from current date)

const countdownDate = addDays(currentDate, 5);

//time to countdown date

const countdownDateTime = countdownDate.getTime();

let rotate = 360;

const updateCount = setInterval(function () {
  // Get date and time for right now (updates every second)
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  //   const distance = countdownDateTime - now;

  const distance = test - now;

  // Time calculations for days, hours, minutes and seconds
  if (distance < 1) {
    clearInterval(updateCount);
    console.log("finished");
    alert("Countdown Finished!!!");
    return;
  } else {
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  //fill out ui with countdown time
  daysCard.innerHTML = days;
  hoursCard.innerHTML = hours;
  minutesCard.innerHTML = minutes;
  secondsCard.innerHTML = seconds;

  //   console.log(updateCount);

  //   if (seconds === 0 && minutes > 0) {
  //     minutesCard.parentNode.style.transform = `rotateX(${rotate}deg)`;
  //     rotate = rotate + 360;
  //   }
  //   if (minutes === 59 && hours > 0) {
  //     hoursCard.parentNode.style.transform = `rotateX(${rotate}deg)`;
  //     rotate = rotate + 360;
  //   }
  //   if (hours === 23 && days > 0) {
  //     daysCard.parentNode.style.transform = `rotateX(${rotate}deg)`;
  //     rotate = rotate + 360;
  //   }
}, 1000);
