document.getElementById("send-otp-btn").addEventListener("click", sendOTP);

function sendOTP() {
  const email = document.getElementById("email").value;
  const otpverify = document.getElementsByClassName("otpverify")[0];

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Generate a random 4-digit OTP
  let otp_val = Math.floor(1000 + Math.random() * 9000);

  // Prepare the email body
  let emailbody = `<h2>Your OTP is </h2><strong>${otp_val}</strong>`;

  // Send the OTP via SMTP.js
  Email.send({
    SecureToken: "23f840e3-69a3-417d-a809-ed7496f77a2d",
    To: email,
    From: "madhujune2306@gmail.com",
    Subject: "Email Verification",
    Body: emailbody,
  }).then((message) => {
    if (message === "OK") {
      alert("OTP sent to your email " + email);

      // Show the OTP input field and verify button
      otpverify.style.display = "block";

      // Handle OTP verification
      document
        .getElementById("verify-btn")
        .addEventListener("click", function () {
          const enteredOtp = document.getElementById("otp_inp").value;

          if (enteredOtp === otp_val.toString()) {
            alert("Email address verified successfully!");

            // Redirect to home.html after clicking OK on the alert
            window.location.href = "/Home/Home.html";

            otpverify.style.display = "none"; // Hide OTP verification section
            document.getElementById("email").value = ""; // Clear email field
            document.getElementById("otp_inp").value = ""; // Clear OTP input field
          } else {
            alert("Invalid OTP. Please try again.");
          }
        });
    }
  });
}

// Utility function to validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
