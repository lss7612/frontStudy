const target = document.querySelector('.target');
const width = target.offsetWidth;
const heigth = target.offsetHeight;

window.addEventListener('mousemove', (e) => {
  target.style.left = `${e.clientX - width / 2}px`;
  target.style.top = `${e.clientY - heigth / 2}px`;
});
