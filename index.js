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
    timerList.forEach((item) => {
      item.setTimer(0);
    });
  });

  function onSubmit(count) {
    const timer = createTimer(count);
    timerList.push(timer);
    timerListEl.appendChild(timer.el);
    timer.setTimer(count);
  }

  function createTimer() {
    const timerId = `timer-${seqId++}`;
    const timerEl = document.createElement('li');
    timerEl.className = 'timer-item';
    timerEl.id = timerId;
    const titleEl = document.createElement('span');
    titleEl.textContent = timerId;
    const countEl = document.createElement('span');

    let intervalId = null;

    timerEl.appendChild(titleEl);
    timerEl.appendChild(countEl);

    const setTimer = (count) => {
      clearInterval(intervalId);
      countEl.textContent = count;
      intervalId = setInterval(() => {
        const currentCount = Number(countEl.textContent);
        if (currentCount === 0) {
          clearInterval(intervalId);
          timerEl.remove();
          return;
        }
        countEl.textContent = currentCount - 1;
      }, 1000);
    };

    return {
      el: timerEl,
      setTimer,
    };
  }
}

main();
