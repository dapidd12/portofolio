export function initializeLiveClock() {
  function updateClock() {
    const now = new Date();
    const options = { 
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    
    const timeString = now.toLocaleTimeString('id-ID', options);
    const clockElement = document.getElementById('live-clock');
    
    if (clockElement) {
      const timeText = clockElement.querySelector('#time') || clockElement;
      timeText.textContent = timeString;
    }
  }

  // Update immediately
  updateClock();
  
  // Update every second
  setInterval(updateClock, 1000);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLiveClock);
} else {
  initializeLiveClock();
}