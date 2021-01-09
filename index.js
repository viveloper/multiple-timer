class App {
  constructor() {
    this.inputEl = document.querySelector('input');
    this.timerListEl = document.querySelector('ul');
    this.completeAllBtn = document.querySelector('button');

    this.timerIdSeqs = 0;
    this.timerMap = {};

    this.bindEvent();
  }

  bindEvent() {
    this.inputEl.addEventListener('keyup', this.handleKeyup);
    this.completeAllBtn.addEventListener('click', this.completeAll);
  }

  handleKeyup = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') return;

      const count = Number(e.target.value);

      if (!Number.isNaN(count) && count >= 1 && count <= 60) {
        this.addTimer(count);
      }
      e.target.value = '';
    }
  };

  addTimer = (count) => {
    const timerId = this.timerIdSeqs++;

    this.timerMap[timerId] = {
      timerId,
      timerName: `Timer${timerId}`,
      count,
      intervalId: null,
    };

    const timerEl = document.createElement('li');
    timerEl.id = timerId;
    timerEl.className = 'timer';
    timerEl.innerText = `Timer${timerId} : ${count}`;
    this.timerListEl.appendChild(timerEl);

    this.timerMap[timerId].intervalId = setInterval(() => {
      const count = --this.timerMap[timerId].count;
      const intervalId = this.timerMap[timerId].intervalId;
      if (count >= 0) {
        timerEl.innerText = `Timer${timerId} : ${count}`;
      } else {
        clearInterval(intervalId);
        this.timerListEl.removeChild(timerEl);
        delete this.timerMap[timerId];
      }
    }, 1000);
  };

  completeAll = () => {
    this.timerListEl.querySelectorAll('.timer').forEach((timerEl) => {
      const timerId = timerEl.id;
      clearInterval(this.timerMap[timerId].intervalId);
      timerEl.innerText = `Timer${timerId} : 0`;
      this.timerIdSeqs = 0;
      setTimeout(() => {
        this.timerListEl.removeChild(timerEl);
        delete this.timerMap[timerId];
      }, 1000);
    });
  };
}

new App();
