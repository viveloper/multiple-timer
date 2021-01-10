import HeaderView from '../Views/HeaderView.js';
import FooterView from '../Views/FooterView.js';
import TimerListView from '../Views/TimerListView.js';

class MainController {
  constructor() {
    console.log('MainController');
    this.HeaderView = new HeaderView(document.querySelector('#header'));
    this.TimerListView = new TimerListView(
      document.querySelector('#timer-list')
    );
    this.FooterView = new FooterView(document.querySelector('#footer'));

    this.bindEvents();
  }

  bindEvents() {
    this.HeaderView.on('keyup', this.onKeyup);
  }

  onKeyup(e) {
    console.log(e.target.value);
  }
}

export default MainController;
