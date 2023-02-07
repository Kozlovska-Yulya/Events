const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: grey; margin-left: 8px">div</span>`;
  eventsListElem.innerHTML += `<span style="color: grey; margin-left: 8px">p</span>`;
  eventsListElem.innerHTML += `<span style="color: grey; margin-left: 8px">span</span>`;
};

const logGreyDiv = logTarget.bind();
const logGreyP = logTarget.bind();
const logGreySpan = logTarget.bind();

divElem.addEventListener('click', logGreyDiv);
pElem.addEventListener('click', logGreyP);
pElem.addEventListener('click', logGreySpan);
