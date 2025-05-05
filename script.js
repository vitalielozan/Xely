const myArrow = document.querySelector('#myArrow');
let arrowClicked = false;

window.addEventListener('scroll', onScroll);
myArrow.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  arrowClicked = true;
  myArrow.style.display = 'none';
});

function onScroll() {
  const scrolledTo = window.scrollY + window.innerHeight;
  const threshold = document.body.scrollHeight * 0.65;
  const isReachBottom = document.body.scrollHeight - threshold <= scrolledTo;
  if (isReachBottom) {
    myArrow.style.display = 'block';
  } else {
    myArrow.style.display = 'none';
  }
}

function getYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const displayYear = document.querySelector('#displayYear');
  displayYear.innerHTML = currentYear;
}
getYear();
