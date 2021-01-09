class Timer {
  constructor(props) {
    this.props = props;
    this.name = `TimerComponent${this.props.key}`;
  }
  render() {
    const { id, name, count } = this.props.timer;

    const el = document.createElement('li');
    el.id = `timer${id}`;
    el.className = 'timer';

    const timerNameEl = document.createElement('div');
    timerNameEl.className = 'timer-name';
    timerNameEl.innerText = `${name}`;
    el.appendChild(timerNameEl);

    const countEl = document.createElement('div');
    countEl.className = 'count';
    countEl.innerText = `${count}`;
    el.appendChild(countEl);

    return el;
  }
}

export default Timer;
