let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;
  const mainContainer = document.getElementById("content-container");
  const tableContainer = document.createElement("tr");

  tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    <button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-secondary done-btn ">Done</button>
    </td>
  `;
  mainContainer.appendChild(tableContainer);
  document.getElementById("input-value").value = "";

  const deleteBtn = document.getElementsByClassName("delete-btn");
  for (let button of deleteBtn) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }

  const doneBtn = document.getElementsByClassName("done-btn");
  for (let button of doneBtn) {
    button.addEventListener("click", function (event) {
      let dBtn = event.target;
      console.log(dBtn.classList);
      dBtn.classList = "btn btn-primary bg-success done-btn ";
      console.log(dBtn.classList);
      dBtn.innerHTML = `
      Done <span style="font-size: 18px; margin-left:8px"><i class="fa-solid fa-check"></i></span>
      `;
    });
  }
});
