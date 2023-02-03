const spanElem = document.querySelector('rect_span');

const logTarget = (text, color) => {
  const eventListElem = document.querySelector('.events-list');
  eventListElem.innerHTML = (
    <span style="color: grey; margin-left: 8px;">div</span>
  );
};

const logGreenSpan = logTarget.bind(null, 'Span', 'green');

spanElem.addEvenListener('click', logGreenSpan);
