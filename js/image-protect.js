(() => {
  if (window.__yallaImageProtectInit) return;
  window.__yallaImageProtectInit = true;

  const message = 'Copyright Notice: This image belongs to Yalla-Dasi Ads. Unauthorized copying or reuse may lead to legal action.';
  let lastShownAt = 0;

  function warn() {
    const now = Date.now();
    if (now - lastShownAt < 1200) return;
    lastShownAt = now;
    alert(message);
  }

  function isImageTarget(target) {
    return !!(target && target.closest && target.closest('img'));
  }

  function disableDraggableImages() {
    document.querySelectorAll('img').forEach((img) => {
      img.setAttribute('draggable', 'false');
    });
  }

  document.addEventListener('contextmenu', (e) => {
    if (!isImageTarget(e.target)) return;
    e.preventDefault();
    warn();
  }, true);

  document.addEventListener('dragstart', (e) => {
    if (!isImageTarget(e.target)) return;
    e.preventDefault();
    warn();
  }, true);

  document.addEventListener('keydown', (e) => {
    const saveCombo = (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S');
    if (!saveCombo) return;
    e.preventDefault();
    warn();
  });

  disableDraggableImages();
  const observer = new MutationObserver(disableDraggableImages);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
