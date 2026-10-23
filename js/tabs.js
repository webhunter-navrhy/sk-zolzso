// Karty modelov: bez JS sú vidieť všetky skupiny pod sebou, s JS len vybraný model.
(function () {
  var taby = document.querySelectorAll('.taby [role=tab]');
  var panely = document.querySelectorAll('.panel');
  if (!taby.length) return;
  document.documentElement.classList.add('js');
  function vyber(id) {
    taby.forEach(function (t) { t.setAttribute('aria-selected', t.id === 'tab-' + id ? 'true' : 'false'); });
    panely.forEach(function (p) { p.hidden = p.id !== 'panel-' + id; });
  }
  taby.forEach(function (t) { t.addEventListener('click', function () { vyber(t.id.slice(4)); }); });
  vyber(taby[0].id.slice(4));
})();

// Na telefóne sú skupiny dielov zbalené, otvorená je len prvá.
(function () {
  if (!window.matchMedia || !window.matchMedia('(max-width: 700px)').matches) return;
  document.querySelectorAll('.skupiny').forEach(function (g) {
    g.querySelectorAll('details').forEach(function (d, i) { if (i > 0 && d.querySelector('li')) d.open = false; });
  });
})();
