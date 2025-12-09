// Select all slides
const slides = document.querySelectorAll('.slide');
let current = 0;
const total = slides.length;

// Show the first slide initially
slides[current].classList.add('active');

// Function to show a slide by index
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Next button click
document.getElementById('next').addEventListener('click', () => {
  console.log('next');
  current++;
  if (current >= total) current = 0;
  console.log('current:', current);
  showSlide(current);
});

// Previous button click
document.getElementById('previous').addEventListener('click', () => {
  console.log('previous');
  current--;
  if (current < 0) current = total - 1;
  console.log('current:', current);
  showSlide(current);
});

// Automatic slideshow every 5 seconds
setInterval(() => {
  current++;
  if (current >= total) current = 0;
  showSlide(current);
}, 5000);
