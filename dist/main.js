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
      let allSiblings = [...container.parentElement.children].filter(
        (child) => child !== container
      );

      allSiblings.forEach((sibling) => {
        if (sibling.classList.contains("width")) {
          sibling.classList.remove("width");
        }
      });
    }
  });
});
