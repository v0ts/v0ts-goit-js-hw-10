// Завдання 1
// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval.
//  Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let time = 0;
const messageInterval = setInterval(() => {
  console.log("message");
  time = time + 1;
  if (time === 5) {
    clearInterval(messageInterval);
  }
}, 1000);

// Завдання 2
// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію,
//  змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const boxEL = document.querySelector(".box");
const styleInterval = setInterval(() => {
  boxEL.classList.toggle("animation");
}, 1000);

// Завдання 3
// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу,
//  використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const textEl = document.querySelector(".game-text");
const buttonEl = document.querySelector(".game-button");
const pointsEl = document.querySelector(".game-points");

let timer = 0;
let points = 0;

const pointsFunction = () => {
  points = points + 1;
  pointsEl.textContent = points;
};

buttonEl.addEventListener("click", pointsFunction);

const gameInterval = setInterval(() => {
  timer = timer + 1;
  if (timer === 10) {
    clearInterval(gameInterval);
    textEl.textContent = "game end";
    buttonEl.removeEventListener("click", pointsFunction);
  }
}, 1000);

// Завдання 4
// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури.
//  Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const inputEl = document.querySelector(".input");
const submitButtonEl = document.querySelector(".form-button");
let userTime = 0;

submitButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  const timeInterval = setInterval(() => {
    userTime = userTime + 1;
    if (time === Number(inputEl.value)) {
      console.log("times up!");
      clearInterval(timeInterval);
    }
  }, 1000);
});
