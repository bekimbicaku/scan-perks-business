(function () {
  var stampsInput = document.getElementById('stamps');
  var priceInput = document.getElementById('price');
  var rewardsInput = document.getElementById('rewards');
  var message = document.getElementById('cost-message');
  var output = document.getElementById('cost-output');
  var outStamps = document.getElementById('out-stamps');
  var outPrice = document.getElementById('out-price');
  var outRewards = document.getElementById('out-rewards');
  var outPriceEq = document.getElementById('out-price-eq');
  var outStampEq = document.getElementById('out-stamp-eq');

  function whole(raw) {
    var trimmed = raw.trim();
    if (!/^\d+$/.test(trimmed)) return null;
    var value = Number(trimmed);
    return Number.isSafeInteger(value) ? value : null;
  }

  function priceToCents(raw) {
    var trimmed = raw.trim();
    if (trimmed.indexOf(',') !== -1 && trimmed.indexOf('.') === -1) trimmed = trimmed.replace(',', '.');
    if (!/^\d+(\.\d{1,2})?$/.test(trimmed)) return null;
    var parts = trimmed.split('.');
    var dollars = parts[0];
    var frac = parts[1] || '';
    return Number(dollars) * 100 + Number((frac + '00').slice(0, 2));
  }

  function formatCents(cents) {
    var wholePart = Math.floor(cents / 100);
    var frac = String(cents % 100).padStart(2, '0');
    return wholePart + '.' + frac;
  }

  function showMessage(text) {
    if (!message || !output) return;
    message.hidden = false;
    message.textContent = text;
    output.hidden = true;
  }

  function paint() {
    if (!stampsInput || !priceInput || !rewardsInput) return;
    var stampsRaw = stampsInput.value;
    var priceRaw = priceInput.value;
    var rewardsRaw = rewardsInput.value;
    if (stampsRaw.trim() === '' && priceRaw.trim() === '' && rewardsRaw.trim() === '') {
      showMessage('Enter your three numbers to see the arithmetic.');
      return;
    }

    var stamps = whole(stampsRaw);
    var cents = priceToCents(priceRaw);
    var rewards = whole(rewardsRaw);
    var stampTotal = stamps !== null && rewards !== null ? stamps * rewards : null;
    var giveaway = cents !== null && rewards !== null ? cents * rewards : null;
    var ready =
      stamps !== null &&
      stamps >= 1 &&
      cents !== null &&
      rewards !== null &&
      stampTotal !== null &&
      Number.isSafeInteger(stampTotal) &&
      giveaway !== null &&
      Number.isSafeInteger(giveaway);

    if (!ready || !message || !output || !outStamps || !outPrice || !outRewards || !outPriceEq || !outStampEq) {
      showMessage('Enter 1 or more stamps, a price with up to two decimal places, and a whole number of rewards (0 or more).');
      return;
    }

    var price = formatCents(cents);
    message.hidden = true;
    output.hidden = false;
    outStamps.textContent = String(stamps);
    outPrice.textContent = price;
    outRewards.textContent = String(rewards);
    outPriceEq.textContent = price + ' × ' + rewards + ' = ' + formatCents(giveaway) + ' at your price.';
    outStampEq.textContent = stamps + ' × ' + rewards + ' = ' + stampTotal + ' stamps.';
  }

  if (stampsInput) stampsInput.addEventListener('input', paint);
  if (priceInput) priceInput.addEventListener('input', paint);
  if (rewardsInput) rewardsInput.addEventListener('input', paint);
})();
