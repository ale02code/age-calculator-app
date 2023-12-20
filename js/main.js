"use strict";

const dayInput = document.getElementById("put-day");
const monthInput = document.getElementById("put-month");
const yearInput = document.getElementById("put-year");
const arrowResult = document.querySelector(".image-arrow");

const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const labels = document.querySelectorAll(".label-date-input");
const inputs = document.querySelectorAll(".input-date");

const daySpanResult = document.getElementById("days-date-result");
const monthSpanResult = document.getElementById("months-date-result");
const yearSpanResult = document.getElementById("years-date-result");

function getAge() {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const valueDate = new Date(`${year}-${month}-${day}`);
  const getTimeDate = !isNaN(valueDate.getTime())


  const dateComparative = new Date();
  const currentDay = dateComparative.getDate();
  const currentMonth = dateComparative.getMonth();
  const currentYear = dateComparative.getFullYear();

  const changeErrorMode = () => {
    labels.forEach(label => label.classList.add("label-error"))
    inputs.forEach(input => input.classList.add("input-error"))
  }

  if (day === "" || month === "" || year === "") {
    dayError.textContent = "This field is required";
    monthError.textContent = "This field is required";
    yearError.textContent = "This field is required";

    changeErrorMode();
  } else if (year > currentYear) {
    dayError.textContent = "Must be a valid day";
    monthError.textContent = "Must be a valid month";
    yearError.textContent = "Must be in the past";

    changeErrorMode()
  } else if (getTimeDate === false) {
    dayError.textContent = "Must be a valid date";

    changeErrorMode()
  } else {
    daySpanResult.textContent = (currentDay - day);
    monthSpanResult.textContent = ((currentMonth - month) + 1);
    yearSpanResult.textContent = (currentYear - year);
  }

  const Age = "12"

  return console.log(Age, getTimeDate)
}

arrowResult.addEventListener('click', getAge);
