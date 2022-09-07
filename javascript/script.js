let answer = 1;

let answerNumber;

const errorBox = document.querySelector('#error');

const close = document.querySelector("#close")

const button = document.querySelectorAll('.button');

// Score Fico

const radio = document.querySelectorAll('.fico');

const btnScore = document.querySelector('.btnScore');

// state

const buttonState = document.querySelector('.verificarState');

let state = document.querySelector('#state').value;

// error Message
const errorMessage = [
  'Sorry, this service is available only for people who use credit cards.',
  "Sorry, this service doesn't support your state",
  'Sorry, this service is available only for people with FICO 660+',
];

button.forEach((element) => {
  element.addEventListener('click', (item) => {
    const value = item.target.textContent;

    value.toLocaleLowerCase() === 'yes' ? nextAnswer() : error();
  });
});

buttonState.addEventListener('click', () => {
  state = document.querySelector('#state').value;

  state ? nextAnswer() : error();
});

btnScore.addEventListener('click', () => {
  let value;

  radio.forEach((item) => {
    if (item.checked) {
      value = item.value;
    }
  });

  value === '660+' ? nextAnswer() : error();
});

close.addEventListener("click", () => {
  window.close()
})

function nextAnswer() {
  noneAnswer();

  answer++;

  removenoneAnswer();
}

function error() {
  errorBox.classList.remove('d-none');

  errorBox.querySelector('p').textContent = errorMessage[answer - 1];

  noneAnswer();
}

// Add none class
function noneAnswer() {
  answerNumber = document.querySelector(`#answer${answer}`);

  answerNumber.classList.add('d-none');
}

// remove none class
function removenoneAnswer() {
  answerNumber = document.querySelector(`#answer${answer}`);

  answerNumber.classList.remove('d-none');

  answerNumber.classList.add('animate__animated', 'animate__fadeInRight');
}
