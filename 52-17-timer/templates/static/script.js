let totalTime = 52 * 60; // 52 minutes in seconds
let timerInterval;
let isRunning = false;

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  let timeLeft = totalTime;

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = 
      `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      isRunning = false;

      // Play sound
      document.getElementById("alarm-sound").play();

      // Increment session tracker
      let sessions = parseInt(localStorage.getItem("sessionsCompleted") || 0);
      sessions++;
      localStorage.setItem("sessionsCompleted", sessions);
      document.getElementById("session-count").innerText = `Sessions Today: ${sessions}`;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  document.getElementById("timer").textContent = "52:00";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".container").classList.toggle("dark-mode");
}

// Load session count on page load
window.onload = () => {
  let sessions = localStorage.getItem("sessionsCompleted") || 0;
  document.getElementById("session-count").innerText = `Sessions Today: ${sessions}`;
};
