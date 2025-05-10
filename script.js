
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
document.getElementById('submitReview').addEventListener('click', () => {
  const note = document.getElementById('ratingValue').textContent;
  const comment = document.getElementById('comment').value;
  document.getElementById('reviewDisplay').innerHTML = `<p>${note}</p><p>${comment}</p>`;
});
document.getElementById('watchVideo').addEventListener('click', function () {
  window.open('https://youtu.be/vSrMlkmSRLo?si=OddwNpjS5fVi3AXt.com/watch?v=dQw4w9WgXcQ', '_blank');
});
