const tableControllers = document.querySelectorAll(".table-controller");
createTable(document.querySelector(".table-controller").getAttribute("table"));

tableControllers.forEach((element) => {
  element.addEventListener("change", () => {
    const tableRequest = element.getAttribute("table");
    createTable(tableRequest);
  });
});
