
const toggleBtn = document.getElementById('toggleInstructions');
const instructions = document.querySelector('.Instructions');
let visible = false; 

toggleBtn.addEventListener('click', () => {
  visible = !visible;
  instructions.style.display = visible ? 'block' : 'none';
  toggleBtn.textContent = visible ? 'Cacher les instructions' : 'Afficher les instructions';
});
const stars = document.querySelectorAll('#stars span');
const ratingText = document.getElementById('ratingValue');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i <= index);
    });
    ratingText.textContent = `Note : ${index + 1}/5`;
  });
});