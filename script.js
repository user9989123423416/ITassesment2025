/* js/script.js */
function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  alert('Thank you for your message!');
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    let slideWidth = 0; 

    function updateSlider() {
        slideWidth = slides[0] ? slides[0].clientWidth : 0; 
        if (slideWidth > 0) { 
            sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
    }

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; 
        updateSlider();
    }, 3000); 

    window.addEventListener('resize', updateSlider); 

    updateSlider(); 
});