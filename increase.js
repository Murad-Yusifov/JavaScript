const num = document.getElementById("num");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn.addEventListener("click", function () {
  num.textContent = Number(num.textContent) - 1;
});
btn1.addEventListener("click", function () {
  num.textContent = 0;
});
btn2.addEventListener("click", function () {
  num.textContent = Number(num.textContent) + 1;
});
