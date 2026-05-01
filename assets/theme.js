document.addEventListener('click', function (event) {
  var trigger = event.target.closest('[data-faq-trigger]');
  if (!trigger) return;

  var item = trigger.closest('[data-faq-item]');
  if (!item) return;

  var answer = item.querySelector('[data-faq-answer]');
  var icon = item.querySelector('[data-faq-icon]');
  var expanded = trigger.getAttribute('aria-expanded') === 'true';
  trigger.setAttribute('aria-expanded', String(!expanded));
  if (answer) {
    answer.hidden = expanded;
  }
  if (icon) {
    icon.textContent = expanded ? '+' : '−';
  }
});

document.addEventListener('change', function (event) {
  var variantInput = event.target.closest('.bundle-option input[type="radio"]');
  if (!variantInput) return;

  var picker = variantInput.closest('.bundle-picker');
  if (!picker) return;

  picker.querySelectorAll('.bundle-option').forEach(function (option) {
    option.classList.toggle('is-selected', option.contains(variantInput) && variantInput.checked);
  });
});
