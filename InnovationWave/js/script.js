document.addEventListener("DOMContentLoaded", function () {
  const mobileNav = document.querySelector(".btn-mobile-nav");
  const navHeader = document.querySelector(".header");

  const toggleNavbar = () => {
    navHeader.classList.toggle("nav-open");
  };

  const closeNavbar = () => {
    navHeader.classList.remove("nav-open");
  };

  mobileNav.addEventListener("click", toggleNavbar);

  // Close the navigation menu when a menu item is clicked
  const navMenu = document.querySelector(".main-nav-list");
  navMenu.addEventListener("click", closeNavbar);
});

// const navigation = document.querySelector(".primary-navigation");

// const navigationHeight = navigation.offsetHeight;

// document.documentElement.style.setProperty(
//   "--scroll-padding ",
//   navigationHeight + "px"
// );
