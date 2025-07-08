class CountdownTimer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const endTime = this.getAttribute('data-end-time');
    const endedMessage = this.getAttribute('data-ended-message');

    // Start the countdown logic
    this.updateCountdown(endTime, endedMessage);
    setInterval(() => this.updateCountdown(endTime, endedMessage), 1000);
  }

  updateCountdown(endTime, endedMessage) {
    const countdownEndTime = new Date(endTime).getTime();
  
    if (isNaN(countdownEndTime)) {
      return; // Exit if the time is invalid
    }
  
    const now = new Date().getTime();
    const duration = countdownEndTime - now;
    const countdownElement = this.querySelector(".countdown-clock");
    const endedMessageElement = this.querySelector(".countdown-ended-message");
  
    if (duration < 0) {
      countdownElement.innerHTML = "";
      endedMessageElement.style.display = "block";
    } else {
      let days = Math.floor(duration / (1000 * 60 * 60 * 24));
      let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((duration % (1000 * 60)) / 1000);
  
      days = days < 10 ? `0${days}` : days;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
  
      let countdownString = "";
      let parts = [];
  
      if (days > 0) parts.push(`<span class="countdown-time">${days}</span> <span class="unit">Days</span>`);
      if (hours > 0 || days > 0) parts.push(`<span class="countdown-time">${hours}</span> <span class="unit">hours</span>`);
      if (minutes > 0 || hours > 0 || days > 0) parts.push(`<span class="countdown-time">${minutes}</span> <span class="unit">mins</span>`);
      if (seconds > 0 || minutes > 0 || hours > 0 || days > 0) parts.push(`<span class="countdown-time">${seconds}</span> <span class="unit">secs</span>`);
  
      countdownString = parts.join('<span class="separator">:</span>');
      countdownElement.innerHTML = countdownString.trim();
    }
  }
}

customElements.define('countdown-timer', CountdownTimer);
