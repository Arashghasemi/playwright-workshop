// Fetch fruits from API
(async function () {
  const list = document.getElementById('fruits-list');
  if (!list) return;

  try {
    const res = await fetch('/api/v1/fruits');
    const fruits = await res.json();

    list.innerHTML = '';
    fruits.forEach((fruit) => {
      const li = document.createElement('li');
      li.textContent = fruit.name;
      list.appendChild(li);
    });
  } catch {
    list.innerHTML = '<li>Failed to load fruits.</li>';
  }
})();
