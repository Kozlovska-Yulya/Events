const buttonsElems = document.querySelector('body');

function handleClick(event) {
  console.log(event.target.textContent);
}

buttonsElems.addEventListener('click', handleClick);
