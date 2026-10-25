document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!navToggle || !mainNav) return;

  const isDesktop = () => window.matchMedia("(min-width: 900px)").matches;

  /* باز و بسته کردن منو */
  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    mainNav.classList.add("is-open");
    navToggle.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  navToggle.addEventListener("click", () => {
    if (mainNav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  /* بستن منو با کلیک روی هر لینک */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      if (!isDesktop()) closeMenu();
    });
  });

  /* بستن منو با کلیک بیرون از آن */
  document.addEventListener("click", (e) => {
    if (isDesktop()) return;
    const clickedInsideNav = mainNav.contains(e.target);
    const clickedToggle = navToggle.contains(e.target);
    if (!clickedInsideNav && !clickedToggle && mainNav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  /* بستن منو با کلید Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
      closeMenu();
    }
  });

  /* اگر کاربر اندازه صفحه را تغییر داد و به دسکتاپ رفت، منو ریست شود */
  window.addEventListener("resize", () => {
    if (isDesktop()) {
      closeMenu();
    }
  });

  /* هدر با اسکرول کمی سایه بیشتر بگیرد (اختیاری) */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    });
  }
});