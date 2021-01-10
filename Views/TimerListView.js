import View from './View.js';

class TimerListView extends View {
  constructor(el) {
    super(el);
  }

  addTimer(timer) {
    const { id, name, count } = timer;
    const timerEl = document.createElement('li');
    timerEl.id = id;
    timerEl.className = 'timer';
    this.el.appendChild(timerEl);

    const nameEl = document.createElement('div');
    nameEl.className = 'timer-name';
    nameEl.innerText = name;
    timerEl.appendChild(nameEl);

    const countEl = document.createElement('div');
    countEl.className = 'timer-count';
    countEl.innerText = count;
    timerEl.appendChild(countEl);
  }

  updateTimer(timer) {
    const { id, name, count } = timer;
    const targetTimerEl = this.el.querySelector(`#${id}`);
    targetTimerEl.querySelector('.timer-name').innerText = name;
    targetTimerEl.querySelector('.timer-count').innerText = count;
  }

  removeTimer(id) {
    const targetTimerEl = this.el.querySelector(`#${id}`);
    this.el.removeChild(targetTimerEl);
  }
}

export default TimerListView;
