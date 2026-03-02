document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("nav");
  const sticky = navbar ? navbar.offsetTop : 0;

  window.addEventListener(
    "scroll",
    function () {
      if (!navbar) return;
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    },
    { passive: true }
  );

  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerText = "↑";
  scrollToTopButton.className = "scroll-to-top";
  scrollToTopButton.setAttribute("aria-label", "Scroll to top");
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener(
    "scroll",
    function () {
      scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    },
    { passive: true }
  );
});

function showImage() {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  if (!modal || !modalImage) return;
  modalImage.src = "/img/ct.jpg";
  modal.style.display = "block";
}

function showImag() {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  if (!modal || !modalImage) return;
  modalImage.src = "/img/nt.jpg";
  modal.style.display = "block";
}

function closeImage() {
  var modal = document.getElementById("myModal");
  if (!modal) return;
  modal.style.display = "none";
}

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeImage();
});

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (modal && event.target === modal) closeImage();
});
