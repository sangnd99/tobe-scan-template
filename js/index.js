import throttle from "./throttle.js";

// Transparent header
const headerEl = document.getElementById("header");

const handleActiveHeader = () => {
  const BOUNDARY_OF_TRANSPARENT_BG = headerEl.clientHeight;
  const scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition > BOUNDARY_OF_TRANSPARENT_BG) {
    headerEl.classList.add("header--active");
  } else {
    headerEl.classList.remove("header--active");
  }
};

window.addEventListener("load", handleActiveHeader);
window.addEventListener(
  "scroll",
  throttle(() => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`,
    );
    handleActiveHeader();
  }, 100),
);

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("mobile-menu-close");
const overlay = document.getElementById("overlay");

const handleActiveMenu = () => {
  mobileMenu.classList.add("mobile-menu--active");
  overlay.classList.add("overlay--active");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
};

const handleUnactiveMenu = () => {
  mobileMenu.classList.remove("mobile-menu--active");
  overlay.classList.remove("overlay--active");
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

hamburger.addEventListener("click", () => {
  handleActiveMenu();
});

closeMenu.addEventListener("click", () => {
  handleUnactiveMenu();
});

overlay.addEventListener("click", () => {
  handleUnactiveMenu();
});

// Extend product
const productWrapper = document.getElementById("product-wrapper");
const productBtn = document.getElementById("product");

productBtn.addEventListener("click", () => {
  productWrapper.classList.toggle("mobile-menu__product--active");
});
