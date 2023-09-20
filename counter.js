let count = 0;
const plusBtn = document
  .getElementById("plus-btn")
  .addEventListener("click", function () {
    count = count + 1;
    document.getElementById("count").innerText = count;
  });

const minusBtn = document
  .getElementById("minus-btn")
  .addEventListener("click", function () {
    count = count - 1;
    document.getElementById("count").innerText = count;
  });
