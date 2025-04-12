document.addEventListener("DOMContentLoaded", function () {
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((err) => {
      console.error("Failed to load navigation:", err);
    });
});
