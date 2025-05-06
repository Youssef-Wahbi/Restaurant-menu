const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const wrapper = document.querySelector(".wrapper");
const loginTitle = document.querySelector(".title-login");
const registerTitle = document.querySelector(".title-register");
const SignUpBtn = document.querySelector("#SignUpBtn");
const SignInBtn = document.querySelector("#SignInBtn");

// Form validation and redirection
function validateLoginForm() {
  const email = document.getElementById("log-email").value;
  const password = document.getElementById("log-pass").value;

  if (!email || !password) {
    alert("Please fill in all fields");
    return false;
  }

  // In a real app, you would validate credentials here
  window.location.href = "../main/index.html";
  return false; // Prevent form submission
}

function validateRegisterForm() {
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-pass").value;
  const agree = document.getElementById("agree").checked;

  if (!name || !email || !password) {
    alert("Please fill in all fields");
    return false;
  }

  if (!agree) {
    alert("You must agree to the terms and conditions");
    return false;
  }

  // In a real app, you would register the user here
  window.location.href = "../main/index.html";
  return false; // Prevent form submission
}

// Form switching functions
function loginFunction() {
  loginForm.style.left = "50%";
  loginForm.style.opacity = 1;
  registerForm.style.left = "150%";
  registerForm.style.opacity = 0;
  wrapper.style.height = "500px";
  loginTitle.style.top = "50%";
  loginTitle.style.opacity = 1;
  registerTitle.style.top = "50px";
  registerTitle.style.opacity = 0;
}

function registerFunction() {
  loginForm.style.left = "-50%";
  loginForm.style.opacity = 0;
  registerForm.style.left = "50%";
  registerForm.style.opacity = 1;
  wrapper.style.height = "580px";
  loginTitle.style.top = "-60px";
  loginTitle.style.opacity = 0;
  registerTitle.style.top = "50%";
  registerTitle.style.opacity = 1;
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Set up form submission handlers
  document.querySelector(".login-form").onsubmit = validateLoginForm;
  document.querySelector(".register-form").onsubmit = validateRegisterForm;

  // Set up button click handlers (as fallback)
  if (SignInBtn) {
    SignInBtn.onclick = validateLoginForm;
  }
  if (SignUpBtn) {
    SignUpBtn.onclick = validateRegisterForm;
  }
});
