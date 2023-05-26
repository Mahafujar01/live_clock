function updateClock() {
  // Get the current time
  const currentTime = new Date();

  // Format the time
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Display the formatted time in the clock element
  const clockElement = document.getElementById('clock');
  clockElement.textContent = formattedTime;
}

// Call the updateClock function initially to display the time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
