import View from './View.js';

class HeaderView extends View {
  constructor(el) {
    super(el);
    this.inputEl = this.el.querySelector('#input-count');
    this.bindEvents();
  }

  bindEvents() {
    this.inputEl.addEventListener('keyup', this.onKeyup);
  }

  onKeyup = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') return;
      const count = Number(e.target.value);
      if (!Number.isNaN(count) && count >= 1 && count <= 60) {
        this.emit('@submitCount', { count });
      }
      e.target.value = '';
    }
  };
}

export default HeaderView;
