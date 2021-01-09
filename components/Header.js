class Header {
  constructor(props) {
    this.props = props;
    this.el = document.querySelector('#header');
    this.inputCountEl = this.el.querySelector('#input-count');
    this.inputCountEl.addEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') return;

      const count = Number(e.target.value);

      if (!Number.isNaN(count) && count >= 1 && count <= 60) {
        this.props.addTimer(count);
      }
      e.target.value = '';
    }
  };
}

export default Header;
