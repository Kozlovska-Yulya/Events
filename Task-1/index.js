const spanElem = document.querySelector('.rect_span');

const logTarget = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: grey; margin-left: 8px">span</span>`;
  eventsListElem.innerHTML += `<span style="color: green; margin-left: 8px">span</span>`;
};

spanElem.addEventListener('click', logTarget);
