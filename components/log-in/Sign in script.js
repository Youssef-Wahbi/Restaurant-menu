// Form switching functions only - removed validation
function loginFunction() {
  document.querySelector(".login-form").style.left = "50%";
  document.querySelector(".login-form").style.opacity = 1;
  document.querySelector(".register-form").style.left = "150%";
  document.querySelector(".register-form").style.opacity = 0;
  document.querySelector(".wrapper").style.height = "500px";
  document.querySelector(".title-login").style.top = "50%";
  document.querySelector(".title-login").style.opacity = 1;
  document.querySelector(".title-register").style.top = "50px";
  document.querySelector(".title-register").style.opacity = 0;
}

function registerFunction() {
  document.querySelector(".login-form").style.left = "-50%";
  document.querySelector(".login-form").style.opacity = 0;
  document.querySelector(".register-form").style.left = "50%";
  document.querySelector(".register-form").style.opacity = 1;
  document.querySelector(".wrapper").style.height = "580px";
  document.querySelector(".title-login").style.top = "-60px";
  document.querySelector(".title-login").style.opacity = 0;
  document.querySelector(".title-register").style.top = "50%";
  document.querySelector(".title-register").style.opacity = 1;
}

// Initialize elements on load
document.addEventListener("DOMContentLoaded", function () {
  // Remove old form submission handlers if they exist
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");

  // Clear any existing onsubmit handlers
  loginForm.onsubmit = null;
  registerForm.onsubmit = null;
});
