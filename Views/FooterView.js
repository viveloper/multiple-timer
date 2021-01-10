import View from './View.js';

class FooterView extends View {
  constructor(el) {
    super(el);
    this.completeAllButtonEl = this.el.querySelector('#btn-complete-all');

    this.bindEvents();
  }

  bindEvents() {
    this.completeAllButtonEl.addEventListener(
      'click',
      this.onCompleteAllButtonClick
    );
  }

  onCompleteAllButtonClick = () => {
    this.emit('@completeAll', null);
  };
}

export default FooterView;
