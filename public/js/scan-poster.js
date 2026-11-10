(function () {
  var nameInput = document.getElementById('venue-name');
  var rewardInput = document.getElementById('reward');
  var nameOut = document.getElementById('poster-name');
  var rewardOut = document.getElementById('poster-reward');
  var printButton = document.getElementById('print-poster');

  function paint(input, output, empty) {
    if (!input || !output) return;
    var text = input.value.trim();
    output.textContent = text || empty;
    output.classList.toggle('is-empty', text.length === 0);
  }

  function paintAll() {
    paint(nameInput, nameOut, 'Your venue');
    paint(rewardInput, rewardOut, 'Your reward');
  }

  if (nameInput) nameInput.addEventListener('input', paintAll);
  if (rewardInput) rewardInput.addEventListener('input', paintAll);
  if (printButton) printButton.addEventListener('click', function () { window.print(); });
})();
