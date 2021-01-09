class Footer {
  constructor(props) {
    this.props = props;
    this.el = document.querySelector('#footer');
    this.completeAllBtn = this.el.querySelector('#btn-complete-all');
    this.completeAllBtn.addEventListener(
      'click',
      this.handleCompleteAllBtnClick
    );
  }

  handleCompleteAllBtnClick = () => {
    this.props.completeAll();
  };
}

export default Footer;
