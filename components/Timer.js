class Timer {
  constructor(props) {
    this.props = props;
  }
  render() {
    const { id, name, count } = this.props.timer;

    const el = document.createElement('li');
    el.id = id;
    el.className = 'timer';

    const timerNameEl = document.createElement('div');
    timerNameEl.innerText = `${name}`;
    el.appendChild(timerNameEl);

    const countEl = document.createElement('div');
    countEl.innerText = `${count}`;
    el.appendChild(countEl);

    return el;
  }
}

export default Timer;
