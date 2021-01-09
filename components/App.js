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
      this.decreaseCount(timerId);
    }, 1000);
  };

  decreaseCount = (timerId) => {
    const targetTimer = this.state.timerList.find(
      (item) => item.id === timerId
    );
    targetTimer.count--;

    this.updateTimer(targetTimer);

    if (targetTimer.count === 0) this.deleteTimer(timerId);
  };

  updateTimer = (timer) => {
    const targetTimerEl = document.querySelector(`#timer${timer.id}`);
    const timerNameEl = targetTimerEl.querySelector('.timer-name');
    const countEl = targetTimerEl.querySelector('.count');
    timerNameEl.innerText = timer.name;
    countEl.innerText = timer.count;
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
    this.setState({
      timerList: this.state.timerList.map((item) => ({ ...item, count: 0 })),
    });
    for (const key in this.intervalIdMap) {
      clearInterval(this.intervalIdMap[key]);
      delete this.intervalIdMap[key];
    }
    setTimeout(() => {
      this.setState({
        timerIdSeqs: 0,
        timerList: [],
      });
    }, 1000);
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
