
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

