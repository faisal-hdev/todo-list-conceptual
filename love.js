document.getElementById("yes-btn").addEventListener("click", function () {
  commonFunction("msg");
});

function loveLetter() {
  commonFunction("msg");
}

function commonFunction(id) {
  document.getElementById(id).innerText = "I love You & yes of course  ❤❤ ";
}
