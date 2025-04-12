<script>
  window.addEventListener("DOMContentLoaded", () => {
    fetch("nav.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("navbar").innerHTML = data;
      });
  });
</script>
