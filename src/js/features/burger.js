const iconSideBar = document.querySelector(".sidebar__button");
const sideBar = document.querySelector(".sidebar");
export const openMenu = () => {
  if (iconSideBar) {
    iconSideBar.addEventListener("click", () => {
      document.body.classList.toggle("lock");
      iconSideBar.classList.toggle("active");
      sideBar.classList.toggle("active");
    });
  }
};
