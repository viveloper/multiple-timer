import Header from './Header.js';
import Timer from './Timer.js';
import Footer from './Footer.js';

class App {
  constructor() {
    this.el = document.querySelector('#app');

    this.Header = new Header({ addTimer: this.addTimer });
    this.timerListEl = document.querySelector('#timer-list');
    this.Footer = new Footer({ completeAll: this.completeAll });

    this.timerIdSeqs = 0;
    this.timerMap = {};
  }

  addTimer = (count) => {
    const timer = {
      id: this.timerIdSeqs++,
      count,
    };

    const TimerComponent = new Timer({ timer });

    const timerEl = TimerComponent.el;
    this.timerListEl.appendChild(timerEl);

    this.timerMap[timer.id] = {
      el: timerEl,
      count,
      intervalId: null,
    };
    this.timerMap[timer.id].intervalId = setInterval(() => {
      this.decreaseCount(timer.id);
    }, 1000);
  };

  decreaseCount = (timerId) => {
    this.timerMap[timerId].count -= 1;
    if (this.timerMap[timerId].count >= 0) {
      const timerEl = this.timerMap[timerId].el;
      const countEl = timerEl.querySelector('.count');
      countEl.innerText = this.timerMap[timerId].count;
    }

    if (this.timerMap[timerId].count === -1) {
      this.removeTimer(timerId);
    }
  };

  removeTimer = (timerId) => {
    const timerEl = this.timerMap[timerId].el;
    this.timerListEl.removeChild(timerEl);
    clearInterval(this.timerMap[timerId].intervalId);
    delete this.timerMap[timerId];
  };

  updateTimer = (timerId, count) => {
    this.timerMap[timerId].count = count;
    const timerEl = this.timerMap[timerId].el;
    const countEl = timerEl.querySelector('.count');
    countEl.innerText = this.timerMap[timerId].count;
    clearInterval(this.timerMap[timerId].intervalId);
    this.timerMap[timerId].intervalId = setInterval(() => {
      this.decreaseCount(timerId);
    }, 1000);
  };

  completeAll = () => {
    this.timerIdSeqs = 0;
    for (const timerId in this.timerMap) {
      this.updateTimer(timerId, 0);
    }
  };
}

export default App;
