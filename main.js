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

// Add the rest of your code here
