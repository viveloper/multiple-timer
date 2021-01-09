class Timer {
  constructor(props) {
    this.props = props;

    this.el = document.createElement('li');
    this.el.id = `timer${props.timer.id}`;
    this.el.className = 'timer';

    this.nameEl = document.createElement('div');
    this.nameEl.className = 'timer-name';
    this.nameEl.innerText = `Timer${props.timer.id}`;
    this.el.appendChild(this.nameEl);

    this.countEl = document.createElement('div');
    this.countEl.className = 'count';
    this.countEl.innerText = `${props.timer.count}`;
    this.el.appendChild(this.countEl);
  }
}

export default Timer;
