import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

const contactButton = document.getElementById('contact');
if (contactButton) {
  const tip = tippy(contactButton, {
    content: 'Copy email to clipboard!',
    animation: 'shift-toward-subtle',
    arrow: 'round',
  });

  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = 'james.coy.design@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      tip.setContent('Copied to clipboard!');
      setTimeout(() => {
        tip.setContent('Copy email to clipboard!');
      }, 2000);
    }).catch(() => {
      console.error('Failed to copy email to clipboard.');
    });
  });
}


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
