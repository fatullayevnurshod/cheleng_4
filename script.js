let input = document.querySelectorAll("input");
let btn = document.querySelector(".btn");
let years = document.querySelector("#years .number");
let months = document.querySelector("#months .number");
let days = document.querySelector("#days .number");

let yil = 2023;
let oy = 10;
let sana = 19;
let oysanasi = 30;
btn.onclick = function () {
  // years.style.transition = "10s all linear";
  if (input[1].value < oy || input[0].value < sana) {
    months.textContent = oy - input[1].value;
    years.textContent = yil - input[2].value;

    days.textContent = sana - input[0].value;
  } else if (input[1].value > oy || input[0].value > sana) {
    months.textContent = input[1].value - 1;
    years.textContent = yil - input[2].value - 1;
    days.textContent = oysanasi - (input[0].value - sana);
  } else {
    months.textContent = oy - input[1].value;
    years.textContent = yil - input[2].value;
    days.textContent = 0;
  }
};

// function calculator() {}

// const currentDate = new Date();
// const calculateDate = (day, month, year) => {
//   let daysResult = currentDate.getDate() - day;
//   let monthsResult = currentDate.getMonth() + 1 - month;
//   let yearsResult = currentDate.getFullYear() - year;

//   console.log(daysResult);
// };
