class CountdownTimer extends HTMLElement {
  constructor() {
    super();
    this.interval = null;
  }

  connectedCallback() {
    const endTimeAttr = this.getAttribute('data-end-time');

    if (!endTimeAttr) {
      return;
    }

    this.updateCountdown(endTimeAttr);
    this.interval = setInterval(() => {
      this.updateCountdown(endTimeAttr);
    }, 1000);
  }

  updateCountdown(endTimeAttr) {
    const countdownEndTime = new Date(endTimeAttr).getTime();
    if (isNaN(countdownEndTime)) return;

    const now = Date.now();
    const timeRemaining = countdownEndTime - now;
    const countdownDisplay = this.querySelector(".countdown-clock");
    const countdownText = this.querySelector(".countdown-text");
    const endedMessageDisplay = this.querySelector(".countdown-ended-message");

    if (!countdownDisplay || !endedMessageDisplay) return;

    if (timeRemaining < 0) {
      countdownText.style.display = "none";
      countdownDisplay.innerHTML = "";
      endedMessageDisplay.style.display = "block";
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // MB: Adds a leading 0 for single-digit numbers (05, 09)
    const formatTwoDigits = (val) => (val < 10 ? `0${val}` : `${val}`);

    const timeParts = [];
    if (days > 0) timeParts.push(`<span class="countdown-time">${formatTwoDigits(days)}</span> <span class="unit">Days</span>`);
    if (hours > 0 || days > 0) timeParts.push(`<span class="countdown-time">${formatTwoDigits(hours)}</span> <span class="unit">hours</span>`);
    if (minutes > 0 || hours > 0 || days > 0) timeParts.push(`<span class="countdown-time">${formatTwoDigits(minutes)}</span> <span class="unit">mins</span>`);
    if (seconds >= 0) timeParts.push(`<span class="countdown-time">${formatTwoDigits(seconds)}</span> <span class="unit">secs</span>`);

    countdownDisplay.innerHTML = timeParts.join('<span class="separator">:</span>');
  }

  disconnectedCallback() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

customElements.define('countdown-timer', CountdownTimer);
