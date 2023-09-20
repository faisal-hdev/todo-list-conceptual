function makeRed() {
  document.body.style.backgroundColor = "red";
}

const greenBtn = document
  .getElementById("green-btn")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
  });
