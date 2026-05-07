// Simulate poorly hydrated frontend:
// The button renders immediately but the click handler is attached
// after a random delay (1-3 seconds), simulating slow hydration.
// Clicking before hydration completes does nothing.

const btn = document.getElementById('submit-order');
const result = document.getElementById('order-result');

if (btn && result) {
  // Delay attaching the event handler to simulate poor hydration
  const hydrationDelay = 1000 + Math.random() * 2000; // 1-3 seconds

  setTimeout(() => {
    btn.addEventListener('click', () => {
      result.hidden = false;
      result.className = 'success';
      result.textContent = 'Order confirmed';
    });
  }, hydrationDelay);
}
