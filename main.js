// main.js
import tippy from 'https://cdn.skypack.dev/tippy.js';
import 'https://cdn.skypack.dev/tippy.js/dist/tippy.css';

document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.getElementById('contact');
  if (contactButton) {
    const tip = tippy(contactButton, {
      content: 'Copy my email to your clipboard!',
      animation: 'shift-toward-subtle',
      arrow: 'round',
    });

    contactButton.addEventListener('click', (event) => {
      event.preventDefault();
      const email = 'james.coy.design@gmail.com';

      navigator.clipboard.writeText(email).then(() => {
        tip.setContent('Email copied to clipboard!');
        setTimeout(() => {
          tip.setContent('Copy my email to your clipboard!');
        }, 2000);
      }).catch(() => {
        console.error('Failed to copy email to clipboard.');
      });
    });
  }
});

// Code for active class in nav bar
const navLinks = document.querySelectorAll(".site-nav a");
const currentUrl = window.location.href;

navLinks.forEach(function (link) {
  if (link.href === currentUrl) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

// Code for BlazeSlider
const sliderEl = document.querySelector(".blaze-slider");
const blazeSlider = new BlazeSlider(sliderEl, {
  all: {
    enableAutoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1.4,
    transitionDuration: 150,
    loop: true,
  },
});

blazeSlider.onSlide((pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex) => {
  console.log({ pageIndex, firstVisibleSlideIndex, lastVisibleSlideIndex });
});

// Code for fadeInElements
const fadeInElements = document.querySelectorAll(".fade-in-element");

function checkVisibility() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  fadeInElements.forEach(function (element) {
    const elementPosition = element.getBoundingClientRect().top + scrollY;
    const elementHeight = element.offsetHeight;

    if (scrollY + windowHeight >= elementPosition + elementHeight / 4) {
      element.classList.add("visible");
    }
  });
}

checkVisibility(); // Initial check in case some elements are already in the viewport

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);

// Code for smooth scroll
const tocLinks = document.querySelectorAll(".toc a");

tocLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});
