import Header from './Header.js';
import Timer from './Timer.js';
import Footer from './Footer.js';
import { renderComponent } from '../index.js';

class App {
  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'container';

    this.state = {
      timerIdSeqs: 0,
      timerList: [
        {
          id: 0,
          name: 'timer0',
          count: 30,
        },
        {
          id: 1,
          name: 'timer1',
          count: 20,
        },
      ],
    };
  }

  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.render();
  }

  onSubmit = (count) => {
    const timerId = this.state.timerIdSeqs + 1;
    const newTimer = {
      id: timerId,
      name: `Timer${timerId}`,
      count,
    };
    this.setState({
      timerIdSeqs: this.state.timerIdSeqs + 1,
      timerList: [...this.state.timerList, newTimer],
    });
  };

  render() {
    renderComponent(Header, { onSubmit: this.onSubmit }, this.el);

    const mainEl = document.createElement('main');
    const timerListEl = document.createElement('ul');
    timerListEl.className = 'timer-list';
    this.state.timerList.forEach((timer) => {
      renderComponent(Timer, { timer }, timerListEl);
    });
    mainEl.appendChild(timerListEl);
    this.el.appendChild(mainEl);

    renderComponent(Footer, null, this.el);

    return this.el;
  }
}

export default App;
