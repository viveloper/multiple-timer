import HeaderView from '../Views/HeaderView.js';
import FooterView from '../Views/FooterView.js';
import TimerListView from '../Views/TimerListView.js';

class MainController {
  constructor() {
    this.HeaderView = new HeaderView(document.querySelector('#header'));
    this.TimerListView = new TimerListView(
      document.querySelector('#timer-list')
    );
    this.FooterView = new FooterView(document.querySelector('#footer'));

    this.timerIdSeqs = 0;
    this.timerMap = {};

    this.bindEvents();
  }

  bindEvents() {
    this.HeaderView.on('@submitCount', this.onSubmitCount);
    this.FooterView.on('@completeAll', this.onCompleteAll);
  }

  onSubmitCount = (e) => {
    const { count } = e.detail;
    const idSeqs = this.timerIdSeqs++;
    const timerId = `timer${idSeqs}`;
    const timerName = `Timer${idSeqs}`;
    const newTimer = {
      id: timerId,
      name: timerName,
      count,
      intervalId: null,
    };

    this.timerMap[timerId] = newTimer;
    this.TimerListView.addTimer(newTimer);

    newTimer.intervalId = setInterval(() => {
      newTimer.count--;
      if (newTimer.count >= 0) {
        this.TimerListView.updateTimer(newTimer);
      } else {
        this.TimerListView.removeTimer(newTimer.id);
        clearInterval(newTimer.intervalId);
        delete this.timerMap[timerId];
      }
    }, 1000);
  };

  onCompleteAll = () => {
    for (const timerId in this.timerMap) {
      const timer = this.timerMap[timerId];
      timer.count = 0;
      this.TimerListView.updateTimer(timer);
      clearInterval(this.timerMap[timerId].intervalId);

      setTimeout(() => {
        this.TimerListView.removeTimer(timerId);
        delete this.timerMap[timerId];
        this.timerIdSeqs = 0;
      }, 1000);
    }
  };
}

export default MainController;
