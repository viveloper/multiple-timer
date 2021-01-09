class Header {
  constructor(props) {
    this.props = props;
    this.name = 'HeaderComponent';
  }

  handleKeyup = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') return;

      const count = Number(e.target.value);

      if (!Number.isNaN(count) && count >= 1 && count <= 60) {
        this.props.onSubmit(count);
      }
      e.target.value = '';
    }
  };

  render() {
    const el = document.createElement('header');
    const inputEl = document.createElement('input');
    inputEl.autofocus = true;
    inputEl.addEventListener('keyup', this.handleKeyup);
    el.appendChild(inputEl);
    return el;
  }
}

export default Header;
