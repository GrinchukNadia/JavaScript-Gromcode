const renderNumbers = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};

const renderSits = () =>
  renderNumbers(1, 10)
    .map(
      (seatNumber) => `
      <div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
      ></div>
    `
    )
    .join('');

const renderLines = () => {
  const sitsStr = renderSits();

  return renderNumbers(1, 10)
    .map(
      (lineNumber) => `
      <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
      >${sitsStr}</div>
    `
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderSeats = () => {
  const linesStr = renderLines();

  const sectorsElems = renderNumbers(1, 3)
    .map(
      (sectorNumber) => `
      <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
      >${linesStr}</div>
    `
    )
    .join('');
  
  arenaElem.innerHTML = sectorsElems
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if(!isSeat) {
    return
  }

  const [seatNumber] = event.target.dataset.seatNumber
  const [lineNumber] = event.target.closest('.sector__line').dataset.lineNumber
  const [sectorNumber] = event.target.closest('.sector').dataset.sectorNumber

  const boardElem = document.querySelector('.board__selected-seat');
  boardElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`
}

arenaElem.addEventListener('click', onSeatSelect)

renderSeats()

