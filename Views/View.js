class View {
  constructor(el) {
    this.el = el;
  }

  on(eventName, eventHander) {
    this.el.addEventListener(eventName, eventHander);
  }

  emit(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    this.el.dispatchEvent(event);
  }
}

export default View;
