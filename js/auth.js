// Sign Up
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Signup successful!');
    window.location.href = 'login.html';
  });
}

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'beats.html';
    } else {
      alert('Login failed');
    }
  });
}

// Logout
const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
  });
}
index.html
