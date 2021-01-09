class Footer {
  constructor(props) {
    this.props = props;
    this.name = 'FooterComponent';
  }
  handleBtnClick = () => {
    this.props.onCompleteClick();
  };
  render() {
    const el = document.createElement('footer');
    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'Complete All';
    buttonEl.addEventListener('click', this.handleBtnClick);
    el.appendChild(buttonEl);
    return el;
  }
}

export default Footer;
