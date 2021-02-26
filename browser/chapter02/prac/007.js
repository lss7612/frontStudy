const target = document.querySelector('.target');
const width = target.offsetWidth;
const heigth = target.offsetHeight;

const coordinate = document.querySelector('.coordinate');
const lineX = document.querySelector('.horizental');
const lineY = document.querySelector('.vertical');

document.addEventListener('mousemove', (e) => {
  target.style.left = `${e.clientX - width / 2}px`;
  target.style.top = `${e.clientY - heigth / 2}px`;
  coordinate.style.left = `${e.clientX + 20}px`;
  coordinate.style.top = `${e.clientY + 20}px`;
  coordinate.innerHTML = `${e.clientX}px, ${e.clientY}px`;
  lineX.style.top = `${e.clientY}px`;
  lineY.style.left = `${e.clientX}px`;
});
