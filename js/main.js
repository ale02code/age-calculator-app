"use strict"

const dayInput = document.getElementById("put-day");
const monthInput = document.getElementById("put-month");
const yearInput = document.getElementById("put-year");
const arrowResult = document.querySelector(".image-arrow");

function getDateFromInputs() {
  const date = new Date();
  const day = date.setDay(dayInput.value);
  const month = date.setMonth(monthInput.value);
  const year = date.setFullYear(yearInput.value);

  const dateComparative = new Date();
  const currentDay = dateComparative.getDate();
  const currentMonth = dateComparative.getMonth();
  const currentYear = dateComparative.getFullYear();
  const currentDate = `${currentDay},${currentMonth + 1},${currentYear}`

  return console.log(currentDate);
}

arrowResult.addEventListener('click', getDateFromInputs);