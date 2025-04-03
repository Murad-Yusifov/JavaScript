const num = document.getElementById("num");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let count = 0;

btn.addEventListener("click", () => {
  count--;
  num.innerText = count;
});
btn1.addEventListener("click", () => {
  num.textContent = 0;
});
btn2.addEventListener("click", () => {
  count++;
  num.textContent = count;
});
btn3.addEventListener("click", () => {
  num.textContent = Number(num.textContent) - 10;
});
btn4.addEventListener("click", () => {
  num.textContent = Number(num.textContent) + 10;
});
