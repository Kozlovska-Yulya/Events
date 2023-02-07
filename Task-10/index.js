const buttonsElems = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

buttonsElems.forEach((el) => {
  el.addEventListener('click', handleClick);
});
