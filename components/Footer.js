class Footer {
  constructor() {}
  render() {
    const el = document.createElement('footer');
    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'Complete All';
    el.appendChild(buttonEl);
    return el;
  }
}

export default Footer;
