const checkboxElem = document.querySelector('.task-status');
function handleChange() {
  if (checkboxElem.checked) {
    console.log(true);
  } else console.log(false);
  console.log(checkboxElem.value);
}

checkboxElem.addEventListener('change', handleChange);
