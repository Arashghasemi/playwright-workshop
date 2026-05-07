// Login form handler
const form = document.getElementById('login-form');
const errorMsg = document.getElementById('error-message');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    errorMsg.hidden = true;

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = '/dashboard.html';
      } else {
        errorMsg.textContent = data.message || 'Login failed';
        errorMsg.hidden = false;
      }
    } catch {
      errorMsg.textContent = 'Network error. Please try again.';
      errorMsg.hidden = false;
    }
  });
}
