const header = document.querySelector(".header");
const imageContainers = document.querySelectorAll(".news__image-container");

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (lastKnownScrollPosition > 70) {
    header.style.marginTop = "0";
  } else {
    header.style.marginTop = "1rem";
  }
});

imageContainers.forEach((container) => {
  container.addEventListener("click", function (e) {
    if (e.target === container) {
      container.classList.add("width");
      container.children[0].classList.add("show");
      let allSiblings = [...container.parentElement.children].filter(
        (child) => child !== container
      );

      allSiblings.forEach((sibling) => {
        sibling.children[0].classList.remove("show");
        if (sibling.classList.contains("width")) {
          sibling.classList.remove("width");
        }
      });
    }
  });
});
