// Lightbox: click any figure image to view it full-screen.
(function () {
  const lb = document.getElementById('lightbox');
  const lbimg = document.getElementById('lbimg');
  if (lb && lbimg) {
    document.querySelectorAll('figure.fig img').forEach(function (img) {
      img.addEventListener('click', function () {
        lbimg.src = img.src;
        lbimg.alt = img.alt;
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function () { lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }

  // Copy BibTeX to clipboard.
  const btn = document.getElementById('copyBib');
  const bib = document.getElementById('bib');
  if (btn && bib) {
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(bib.innerText).then(function () {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = original; }, 1500);
      });
    });
  }
})();
