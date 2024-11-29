function toogleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    img.setAttribute('src', './assets/avatar.png');
  }

  const alt = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    alt.setAttribute('alt', 'Dracula vai de F');
  } else {
    alt.setAttribute('alt', 'Dracula tranquilão');
  }

  const nome = document.querySelector('#profile p');
if (html.classList.contains('light')) {
    nome.setAttribute('nome', 'Dracula  - Ah!! Ative o modo DARK ');
    nome.textContent = nome.getAttribute('nome');
} else {
    nome.setAttribute('nome', 'Dracula  - DARK Mode é melhor ');
    nome.textContent = nome.getAttribute('nome');
}
}
