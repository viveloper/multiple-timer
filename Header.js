class Header {
  constructor(props) {
    this.el = document.createElement('header');
    this.props = props;
    this.render();
  }

  handleKeyup = (e) => {
    if (e.key === 'Enter') {
      const count = Number(e.target.value);
      if (!Number.isNaN(count)) this.submit(count);
      e.target.value = '';
    }
  };

  submit = (count) => {
    if (count < 0 || count > 60) return;
    this.props.onSubmit(count);
  };

  render() {
    this.el.innerHTML = '';

    const inputEl = document.createElement('input');
    inputEl.addEventListener('keyup', this.handleKeyup);
    this.el.appendChild(inputEl);
  }
}

export default Header;
