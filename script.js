function formatNumber(num) {
  return num.toLocaleString();
}

function getRandomNumber(digits) {
  const max = Math.pow(10, digits) - 1;
  return Math.floor(Math.random() * (max + 1));
}

function updateTitle(digits) {
  const title = document.getElementById("mainTitle");
  title.textContent = `${digits}-Digit Addition Window Cards`;
}

function saveSettings() {
  localStorage.setItem("numRows", document.getElementById("numRows").value);
  localStorage.setItem("numCols", document.getElementById("numCols").value);
  localStorage.setItem("numDigits", document.getElementById("numDigits").value);
  localStorage.setItem("fontSize", document.getElementById("fontSize").value);
}

function loadSettings() {
  const numRows = localStorage.getItem("numRows");
  const numCols = localStorage.getItem("numCols");
  const numDigits = localStorage.getItem("numDigits");
  const fontSize = localStorage.getItem("fontSize");

  if (numRows) document.getElementById("numRows").value = numRows;
  if (numCols) document.getElementById("numCols").value = numCols;
  if (numDigits) document.getElementById("numDigits").value = numDigits;
  if (fontSize) document.getElementById("fontSize").value = fontSize;

  updateTitle(parseInt(document.getElementById("numDigits").value));
}

function generate() {
  const numRows = parseInt(document.getElementById('numRows').value);
  const numCols = parseInt(document.getElementById('numCols').value);
  const numDigits = parseInt(document.getElementById('numDigits').value);
  const fontSize = parseInt(document.getElementById('fontSize').value);
  const container = document.getElementById('cardContainer');

  const totalProblems = numRows * numCols;

  updateTitle(numDigits);
  saveSettings();

  // Estimate usable A4 width: 794px - ~1cm margins = ~756px
  const usableWidthPx = 756;
  const estimatedCardWidthPx = Math.floor(usableWidthPx / numCols);
  const chPerCard = Math.floor(estimatedCardWidthPx / 8); // Approx. 1ch ≈ 8px at 10pt

  // Font and padding tuning
  let cardPadding = '0.25rem';
  if (fontSize <= 8) cardPadding = '0.05rem';
  else if (fontSize <= 10) cardPadding = '0.2rem';

  // Apply dynamic layout variables
  document.documentElement.style.setProperty('--card-font-size', `${fontSize}pt`);
  document.documentElement.style.setProperty('--card-width', `${chPerCard}ch`);
  document.documentElement.style.setProperty('--card-padding', cardPadding);
  document.documentElement.style.setProperty('--card-cols', numCols);

  // Generate cards
  container.innerHTML = '';
  for (let i = 0; i < totalProblems; i++) {
    const num1 = getRandomNumber(numDigits);
    const num2 = getRandomNumber(numDigits);
    const sum = num1 + num2;

    const num1Str = formatNumber(num1);
    const num2Str = formatNumber(num2);
    const maxLength = Math.max(num1Str.length, num2Str.length);
    const equalsLine = '='.repeat(maxLength + 2);

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
${num1Str.padStart(maxLength + 2)}
+${num2Str.padStart(maxLength + 1)}
 ${equalsLine}
<div class="answer">${formatNumber(sum)}</div>
    `;
    container.appendChild(card);
  }
}

function toggleAnswers() {
  document.querySelectorAll('.card').forEach(card => card.classList.toggle('show-answer'));
}

window.onload = function () {
  loadSettings();
  generate();
};
