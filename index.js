import App from './components/App.js';

const componentMap = {};

renderComponent(App, null, document.querySelector('#app'));

export function renderComponent(Component, props, targetEl) {
  const component = new Component(props);
  targetEl.appendChild(component.render());
}
