let body = document.body;

if (localStorage.getItem('theme') == 'light') {
  body.classList.remove('light')
} else {
  body.classList.add('light')
}
