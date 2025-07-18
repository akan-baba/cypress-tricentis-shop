// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'
import '@shelex/cypress-allure-plugin';



// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}


// Ensure Allure hooks into test lifecycle

