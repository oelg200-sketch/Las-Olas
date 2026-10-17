/* Balneario Las Olas — JavaScript */
(function () {
  'use strict';

  /* ---------- Navbar: fondo al hacer scroll ---------- */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  var iconMenu = document.getElementById('iconMenu');
  var iconClose = document.getElementById('iconClose');
  function setMenu(open) {
    menu.hidden = !open;
    iconMenu.hidden = open;
    iconClose.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setMenu(false); });

  /* ---------- Burbujas flotantes del hero ---------- */
  var bubbles = document.getElementById('bubbles');
  for (var i = 0; i < 12; i++) {
    var b = document.createElement('div');
    var size = 20 + Math.random() * 60;
    b.className = 'bubble';
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 100 + '%';
    b.style.top = Math.random() * 100 + '%';
    b.style.animation = 'float ' + (3 + Math.random() * 4) + 's ease-in-out ' + (Math.random() * 2) + 's infinite';
    bubbles.appendChild(b);
  }

  /* ---------- Galería + lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
  var data = items.map(function (el) {
    var img = el.querySelector('img');
    return {
      src: img.getAttribute('src'),
      alt: img.getAttribute('alt'),
      category: el.querySelector('.g-caption span').textContent
    };
  });
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCat = document.getElementById('lbCat');
  var lbAlt = document.getElementById('lbAlt');
  var current = null;

  function show(index) {
    current = (index + data.length) % data.length;
    var d = data[current];
    lbImg.src = d.src;
    lbImg.alt = d.alt;
    lbCat.textContent = d.category;
    lbAlt.textContent = d.alt;
  }
  function openLb(index) { show(index); lightbox.hidden = false; document.body.style.overflow = 'hidden'; }
  function closeLb() { lightbox.hidden = true; current = null; document.body.style.overflow = ''; }

  items.forEach(function (el, idx) {
    el.addEventListener('click', function () { openLb(idx); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(idx); }
    });
  });
  lightbox.addEventListener('click', closeLb);
  document.getElementById('lbClose').addEventListener('click', function (e) { e.stopPropagation(); closeLb(); });
  document.getElementById('lbPrev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  document.getElementById('lbNext').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  document.getElementById('lbFrame').addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('keydown', function (e) {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });

  /* ---------- Formulario de contacto ---------- */
  var form = document.getElementById('contactForm');
  var success = document.getElementById('success');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.hidden = true;
    success.hidden = false;
    setTimeout(function () {
      success.hidden = true;
      form.reset();
      form.hidden = false;
    }, 4000);
  });
})();
