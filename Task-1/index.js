const divElem = document.querySelector('rect_div');
const pElem = document.querySelector('rect_p');
const spanElem = document.querySelector('rect_span');

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML += `<span style="color: grey; margin-left: 8px;">div</span>`;
};

const logGreenDiv = logTarget.bind(null, 'Div', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGreyDiv = logTarget.bind(null, 'Div', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'Span', 'grey');

divElem.addEventListener('click', logGreenDiv);
divElem.addEventListener('click', logGreyDiv, true);

pElem.addEventListener('click', logGreenP);
pElem.addEventListener('click', logGreyP, true);

spanElem.addEventListener('click', logGreenSpan);
spanElem.addEventListener('click', logGreySpan, true);
