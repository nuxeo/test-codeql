// Intentionally vulnerable sample used to validate CodeQL scanning setup.

// js/xss-through-dom + js/client-side-unvalidated-url-redirection
function render() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  document.getElementById('greeting').innerHTML = 'Hello, ' + name;
}

// js/code-injection
function compute(expr) {
  return eval(expr);
}

// js/redos
function isValidEmail(input) {
  return /^([a-zA-Z0-9]+)+@example\.com$/.test(input);
}

module.exports = { render, compute, isValidEmail };
