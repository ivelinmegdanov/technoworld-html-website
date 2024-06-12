document.getElementById("price-range").addEventListener("input", function () {
  document.getElementById("price-value").textContent =
    "0лв. - " + this.value + "лв.";
});
