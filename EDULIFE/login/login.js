// Toggle between sign-in and sign-up forms
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

signUpBtn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Validation Logic for Sign-Up Form
document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("signUpUsername").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
    const errorMessages = document.getElementById("signUpErrorMessages");

    errorMessages.innerHTML = "";
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      errorMessages.innerHTML += "<p>Email is not valid.</p>";
    }

    if (username.length < 3 || username.length > 20) {
      isValid = false;
      errorMessages.innerHTML +=
        "<p>Username must be between 3 and 20 characters.</p>";
    }

    if (password.length < 6) {
      isValid = false;
      errorMessages.innerHTML +=
        "<p>Password must be at least 6 characters long.</p>";
    }

    if (isValid) {
      // Store sign-up data in localStorage
      localStorage.setItem(
        "signupData",
        JSON.stringify({ username, email, password })
      );
      // Switch to sign-in mode and show success message
      container.classList.remove("sign-up-mode");
    }
  });

// Validation Logic for Sign-In Form
document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("signInUsername").value;
    const password = document.getElementById("signInPassword").value;
    const errorMessages = document.getElementById("signInErrorMessages");

    errorMessages.innerHTML = "";
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      errorMessages.innerHTML += "<p>Email is not valid.</p>";
    }

    if (password.length < 6) {
      isValid = false;
      errorMessages.innerHTML +=
        "<p>Password must be at least 6 characters long.</p>";
    }

    if (isValid) {
      // Retrieve stored sign-up data from localStorage
      const storedData = JSON.parse(localStorage.getItem("signupData") || "{}");

      if (email === storedData.email && password === storedData.password) {
        window.location.href = "otp.html"; // Redirect to otp.html after successful login
      } else {
        errorMessages.innerHTML +=
          "<p>Invalid credentials. Please try again.</p>";
      }
    }
  });
