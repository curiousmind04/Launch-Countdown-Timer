function addDays(date, days) {
  date.setDate(date.getDate() + days);
  return date;
}

const currentDate = new Date();

//line below for testing

const test = currentDate.getTime() + 631105340;

const countToDateDay = addDays(currentDate, 5);

const countToDateTime = countToDateDay.getTime();

let interval = setInterval(() => {
  const now = new Date().getTime();

  const distance = countToDateTime - now;

  //   const distance = test - now;

  if (distance < 1) {
    clearInterval(interval);
    console.log("finished");
    alert("Countdown Finished!!!");
    return;
  }

  flipAllCards(distance);

  //   console.log(interval);
}, 250);

function flipAllCards(time) {
  days = Math.floor(time / (1000 * 60 * 60 * 24));
  hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((time % (1000 * 60)) / 1000);

  flip(document.querySelector("[data-days]"), days);

  flip(document.querySelector("[data-hours]"), hours);

  flip(document.querySelector("[data-minutes]"), minutes);

  flip(document.querySelector("[data-seconds]"), seconds);
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");
  let startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  newNumber = newNumber < 10 ? "0" + newNumber : newNumber;
  startNumber = startNumber < 10 ? "0" + startNumber : startNumber;

  //   topHalf.textContent = startNumber;
  //   bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}
