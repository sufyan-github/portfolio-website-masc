function updateClock() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize the clock and set an interval to update it every second
setInterval(updateClock, 1000);
updateClock(); // Call immediately to avoid initial delay
