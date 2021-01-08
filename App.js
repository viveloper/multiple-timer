import Header from './Header.js';
import TimerList from './TimerList.js';
import { domStore } from './index.js';

class App {
  constructor() {
    this.el = document.createElement('div');
    this.state = {
      timerList: [],
    };
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  handleKeyup = (e) => {
    if (e.key === 'Enter') {
      const count = Number(e.target.value);
      if (!Number.isNaN(count)) {
        this.submit(count);
      }
      e.target.value = '';
    }
  };

  submit = (count) => {
    if (count < 0 || count > 60) return;

    const newTimer = {
      name: 'Timer',
      count,
    };
    this.setState({
      timerList: [...this.state.timerList, newTimer],
    });
  };

  render() {
    this.el.innerHTML = '';

    // header
    const headerEl = document.createElement('header');
    const inputEl = document.createElement('input');
    inputEl.autofocus = true;
    inputEl.addEventListener('keyup', this.handleKeyup);
    headerEl.appendChild(inputEl);
    this.el.appendChild(headerEl);

    // main
    const mainEl = document.createElement('main');
    const timerListEl = document.createElement('ul');
    this.state.timerList.forEach((timer) => {
      const timerEl = document.createElement('li');
      timerEl.innerText = `${timer.name} : ${timer.count}`;
      timerListEl.appendChild(timerEl);
    });
    mainEl.appendChild(timerListEl);
    this.el.appendChild(mainEl);

    // footer
    const footerEl = document.createElement('footer');
    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'Complete All';
    footerEl.appendChild(buttonEl);
    this.el.appendChild(footerEl);

    return this.el;
  }
}

export default App;
