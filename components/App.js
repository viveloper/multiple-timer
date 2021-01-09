import Header from './Header.js';
import Timer from './Timer.js';
import Footer from './Footer.js';
import { renderComponent } from '../index.js';

class App {
  constructor(props) {
    this.props = props;

    this.el = document.createElement('div');
    this.el.className = 'container';

    this.name = 'AppComponent';

    this.state = {
      timerIdSeqs: 0,
      timerList: [],
    };

    this.intervalIdMap = {};
  }

  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.render();
  }

  onSubmit = (count) => {
    const timerId = this.state.timerIdSeqs;
    const newTimer = {
      id: timerId,
      name: `Timer${timerId}`,
      count,
    };
    this.setState({
      timerIdSeqs: this.state.timerIdSeqs + 1,
      timerList: [...this.state.timerList, newTimer],
    });

    this.intervalIdMap[timerId] = setInterval(() => {
      this.updateTimer(timerId);
    }, 1000);
  };

  updateTimer = (timerId) => {
    const targetTimer = this.state.timerList.find(
      (item) => item.id === timerId
    );
    targetTimer.count--;

    const targetTimerEl = document.querySelector(`#timer${timerId}`);
    const countEl = targetTimerEl.querySelector('.count');
    countEl.innerText = targetTimer.count;

    if (targetTimer.count === 0) this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    const targetTimerIdx = this.state.timerList.findIndex(
      (item) => item.id === timerId
    );
    this.state.timerList.splice(targetTimerIdx, 1);

    setTimeout(() => {
      const targetTimerEl = document.querySelector(`#timer${timerId}`);
      document.querySelector('.timer-list').removeChild(targetTimerEl);
    }, 1000);

    clearInterval(this.intervalIdMap[timerId]);
    delete this.intervalIdMap[timerId];
  };

  completeAll = () => {
    console.log('complete all');
  };

  render() {
    this.el.innerHTML = '';

    renderComponent(Header, { onSubmit: this.onSubmit }, this.el);

    const mainEl = document.createElement('main');
    const timerListEl = document.createElement('ul');
    timerListEl.className = 'timer-list';
    this.state.timerList.forEach((timer) => {
      renderComponent(Timer, { timer }, timerListEl);
    });
    mainEl.appendChild(timerListEl);
    this.el.appendChild(mainEl);

    renderComponent(Footer, { onCompleteClick: this.completeAll }, this.el);

    return this.el;
  }
}

export default App;
