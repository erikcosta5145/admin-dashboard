const sidebar = document.getElementById('sidebar');

const overlay = document.getElementById('overlay');

const menuToggle = document.getElementById('menuToggle');

const themeToggle = document.getElementById('themeToggle');

const body = document.body;

// MENU MOBILE

menuToggle.addEventListener('click', () => {

  sidebar.classList.toggle('active');

  overlay.classList.toggle('active');

});

// FECHAR MENU AO CLICAR FORA

overlay.addEventListener('click', () => {

  sidebar.classList.remove('active');

  overlay.classList.remove('active');

});

// FECHAR MENU AO CLICAR EM LINKS

document.querySelectorAll('.menu a').forEach(link => {

  link.addEventListener('click', () => {

    if(window.innerWidth <= 900) {

      sidebar.classList.remove('active');

      overlay.classList.remove('active');

    }

  });

});

// DARK MODE

themeToggle.addEventListener('click', () => {

  body.classList.toggle('light-mode');

  if(body.classList.contains('light-mode')) {

    themeToggle.textContent = '☀️';

  } else {

    themeToggle.textContent = '🌙';

  }

});