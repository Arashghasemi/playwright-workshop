// Cookie banner — shows randomly (~70% of the time) to simulate non-deterministic flow
(function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  if (!banner || !acceptBtn) return;

  const alreadyAccepted = sessionStorage.getItem('cookies-accepted');

  if (alreadyAccepted) {
    banner.classList.add('hidden');
    return;
  }

  // Show the banner ~70% of the time to make it non-deterministic
  const shouldShow = Math.random() < 0.7;

  if (!shouldShow) {
    banner.classList.add('hidden');
    return;
  }

  acceptBtn.addEventListener('click', () => {
    sessionStorage.setItem('cookies-accepted', 'true');
    banner.classList.add('hidden');
  });
})();
