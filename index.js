function main() {
  let seqId = 0;

  const inputCountEl = document.querySelector('#input-count');
  const timerListEl = document.querySelector('#timer-list');
  const CompleteAllButton = document.querySelector('#btn-complete-all');

  const timerList = [];

  inputCountEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      onSubmit(Number(e.target.value));
    }
  });

  CompleteAllButton.addEventListener('click', () => {
    timerList.forEach((timer) => {
      timer.setState({
        count: 0,
      });
    });
  });

  function onSubmit(count) {
    const timerId = seqId++;
    const timer = Timer({ id: timerId, title: `timer-${timerId}`, count });
    timerList.push(timer);
    timerListEl.appendChild(timer.el);
  }
}

main();

// Timer Component
function Timer({ id, title, count }) {
  let state = {
    id,
    title,
    count,
  };

  let intervalId = null;

  const timerEl = document.createElement('li');
  timerEl.className = 'timer-item';
  const titleEl = document.createElement('span');
  const countEl = document.createElement('span');
  timerEl.appendChild(titleEl);
  timerEl.appendChild(countEl);

  const setState = (newState) => {
    state = {
      ...state,
      ...newState,
    };
    render();
  };

  const render = () => {
    timerEl.id = state.id;
    titleEl.textContent = state.title;
    countEl.textContent = state.count;

    clearInterval(intervalId);
    intervalId = setInterval(() => {
      if (state.count === 0) {
        clearInterval(intervalId);
        timerEl.remove();
        return;
      }
      setState({
        ...state,
        count: state.count - 1,
      });
    }, 1000);
  };

  render();

  return {
    el: timerEl,
    setState,
  };
}
