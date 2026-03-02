const form = document.getElementById('triangle-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const base = Number.parseFloat(form.base.value);
  const height = Number.parseFloat(form.height.value);

  if (!Number.isFinite(base) || !Number.isFinite(height) || base <= 0 || height <= 0) {
    message.textContent = 'Please enter valid positive numbers for base and height.';
    return;
  }

  const area = 0.5 * base * height;
  message.textContent = `Area = 1/2 × ${base} × ${height} = ${area}`;
});
