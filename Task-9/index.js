const checkboxElem = document.querySelector('.task-status');

function handleChange(event) {
  if (checkboxElem.checked) {
    console.log(true);
  } else console.log(false);
  console.log(event.target.checked);
}

checkboxElem.addEventListener('change', handleChange);
