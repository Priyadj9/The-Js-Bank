"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const operationsTabContainer = document.querySelector(
  ".operations__tab-container"
);
const operationsTabs = document.querySelectorAll(".operations__tab");
const operationsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

/*

const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});*/
/////////////////////////////////////////////////
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const header = document.querySelector(".header");
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});
headerObserver.observe(header);

/////////////////

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //section.classList.add("section--hidden");
});

////////// LAZY LOADING IMAGES ////////////

const lazyImages = document.querySelectorAll("img[data-src]");

const lazyLoading = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const lazyObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

lazyImages.forEach((img) => lazyObserver.observe(img));
/////////////////////////////////////////////////////////////
///////////////////// Slider Component //////////////////////

const btnSlideLeft = document.querySelector(".slider__btn--left");
const btnSlideRight = document.querySelector(".slider__btn--right");

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
/*
slider.style.overflow = "visible";
slider.style.transform = "scale(0.4) translateX(-800px)";
*/
let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};
goToSlide(0);

//slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnSlideRight.addEventListener("click", nextSlide);

btnSlideLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
  if (e.key === "ArrowLeft") {
    prevSlide();
  }
});
///// DOT FUNCTIONALITY //////////////////////////

const dotContainer = document.querySelector(".dots");

const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activateDot(0);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

/////////////////////////////////////////////////////////////

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((x) => {
      if (x !== link) x.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

//////////////////////////////////////////////////////////////////

operationsTabContainer.addEventListener("click", function (e) {
  const click = e.target.closest(".operations__tab");
  if (!click) {
    return;
  }
  operationsTabs.forEach((tab) =>
    tab.classList.remove("operations__tab--active")
  );
  operationsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );
  click.classList.add("operations__tab--active");

  document
    .querySelector(`.operations__content--${click.dataset.tab}`)
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////////////////////////////

const openModal = function (e) {
  e.addEventListener();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnsOpenModal.forEach((x) => x.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////////////////////
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////////////////////////////////////////////

/*
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});*/

/*
const randNum = function () {
  const num = Math.floor(Math.random() * 255) + 1;
  console.log(num);
  return num;
};

const randColour = function () {
  const x = `rgb(${randNum()},${randNum()},${randNum()})`;
  return x;
};

const LINK = document.querySelector(".nav__link");
const ITEM = document.querySelector(".nav__links");
const NAV = document.querySelector(".nav");

LINK.addEventListener("click", function (e) {
  this.style.backgroundColor = randColour();
  console.log(e);
});
ITEM.addEventListener("click", function (e) {
  this.style.backgroundColor = randColour();
  console.log(e);
});
NAV.addEventListener("click", function (e) {
  this.style.backgroundColor = randColour();
  console.log(e);
});  */
