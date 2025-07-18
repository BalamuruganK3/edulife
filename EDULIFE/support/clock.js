document.addEventListener("DOMContentLoaded", function () {
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const countdownDisplay = document.querySelector(".countdown");
    const breakSound = document.getElementById("break-sound");
  
    let countdownInterval;
    let timeRemaining;
  
    startButton.addEventListener("click", function () {
      const minutes = parseInt(minutesInput.value) || 0;
      const seconds = parseInt(secondsInput.value) || 0;
      timeRemaining = minutes * 60 + seconds;
      if (timeRemaining > 0) {
        countdownInterval = setInterval(updateCountdown, 1000);
      }
    });
  
    resetButton.addEventListener("click", function () {
      clearInterval(countdownInterval);
      timeRemaining = 0;
      countdownDisplay.textContent = "00:00";
      minutesInput.value = "";
      secondsInput.value = "";
    });
  
    function updateCountdown() {
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = "00:00";
        breakSound.play();
      } else {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        countdownDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
    }
  });
  