const button = document.querySelector('.button');
const results = document.querySelector('.results');
const PRINCIPAL = document.querySelector('#principal');
const YEARS = document.querySelector('#years');
const CLIENT_DEPOSIT = document.querySelector('.client-deposit');
const TIME = document.querySelector('.time');
const TOTAL_INTERES = document.querySelector('.interest-rate');
const TOTAL_AMOUNT = document.querySelector('.total-amount');

let slider = document.getElementById('rate');
let output = document.getElementById('range-p');
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};

function calculateResults(e) {
  const p = parseFloat(PRINCIPAL.value);
  if (p <= 0) {
    return alert('Please enter a positive number');
  } else {
    const r = parseFloat(slider.value);
    const t = parseFloat(YEARS.value);
    const interest = (p * t * r) / 100;
    const total = (interest + p).toFixed(2);
    const dateNow = new Date();
    const calculateYear =
      parseInt(dateNow.getFullYear()) + parseInt(YEARS.value);
    if (isFinite(total)) {
      CLIENT_DEPOSIT.innerHTML = `If you deposit <mark>${p}$</mark>`;
      TOTAL_INTERES.innerHTML = `at an interest rate of <mark>${r}%</mark>`;
      TOTAL_AMOUNT.innerHTML = `You will receive an amount of <mark>${total}$</mark>`;
      TIME.innerHTML = `in the year <mark>${calculateYear}</mark>`;
      results.classList.remove('hide');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}

button.addEventListener('click', (e) => {
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});
