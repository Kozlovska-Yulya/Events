const buttonsElems = document.querySelectorAll('.btn');

function handleClick(event) {
  console.log(event.target.textContent);
}

buttonsElems.forEach((el) => {
  el.addEventListener('click', handleClick);
});
