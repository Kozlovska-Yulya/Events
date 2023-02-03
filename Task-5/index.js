const inputElem = document.querySelector('.search__input');
const buttonElem = document.querySelector('.search__btn');

function handleClick() {
  console.log(inputElem.value);
}

buttonElem.addEventListener('click', handleClick);
