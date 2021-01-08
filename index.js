class App {
  constructor() {
    this.inputEl = document.querySelector('input');
    this.timerListEl = document.querySelector('ul');
    this.completeAllBtn = document.querySelector('button');

    this.state = {
      idSeqs: 0,
      timerList: [{ name: 'timer1', count: 30 }],
    };

    this.renderTimerList();
  }

  renderTimerList() {
    this.state.timerList.forEach((item) => {
      const timerEl = document.createElement('li');
      timerEl.innerText = `${item.name} : ${item.count}`;
      this.timerListEl.appendChild(timerEl);
    });
  }
}

new App();
