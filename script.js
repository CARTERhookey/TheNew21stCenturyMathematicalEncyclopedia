
const button = document.getElementById("Calc-Py");

button.addEventListener("click", function () {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);

  if (!a || !b) {
    document.getElementById("result").textContent = "Please enter both numbers.";
    return;
  }

  const c = Math.sqrt(a * a + b * b);

  document.getElementById("result").textContent =
    "Hypotenuse: " + c.toFixed(2);
});
