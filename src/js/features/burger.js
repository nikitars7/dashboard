const iconSideBar = document.querySelector(".nav__button");
const sideBar = document.querySelector(".nav");
export const openMenu = () => {
  if (iconSideBar) {
    iconSideBar.addEventListener("click", () => {
      document.body.classList.toggle("lock");
      iconSideBar.classList.toggle("active");
      sideBar.classList.toggle("active");
    });
  }
};
