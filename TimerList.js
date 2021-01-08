class TimerList {
  constructor(props) {
    this.el = document.createElement('ul');
    this.props = props;
    this.render();
  }

  render() {
    this.el.innerHTML = '';

    this.props.timerList.forEach((timer) => {
      const timerEl = document.createElement('li');
      timerEl.innerText = `${timer.timerName} : ${timer.count}`;
      timer.intervalId = setInterval(() => {
        this.props.decreaseCount(timer.timerId);
      }, 1000);
      this.el.appendChild(timerEl);
    });
  }
}

export default TimerList;
