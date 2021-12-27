const header = document.querySelector(".header");

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (lastKnownScrollPosition > 70) {
    header.style.marginTop = "0";
  } else {
    header.style.marginTop = "1rem";
  }
});
