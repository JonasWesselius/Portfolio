let currentSlide = 0;

function showSlide(index, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-item');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

// Function to navigate to the previous slide in a carousel
function prevSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-item');
        if (slides.length > 0) {
            let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
            if (currentSlideIndex === -1) currentSlideIndex = 0; // Fallback to the first slide if none are active
            slides[currentSlideIndex].classList.remove('active');
            let prevSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
            slides[prevSlideIndex].classList.add('active');
            showSlide(prevSlideIndex, carouselId);
        }
    }
}

// Function to navigate to the next slide in a carousel
function nextSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-item');
        if (slides.length > 0) {
            let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
            if (currentSlideIndex === -1) currentSlideIndex = 0; // Fallback to the first slide if none are active
            slides[currentSlideIndex].classList.remove('active');
            let nextSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
            slides[nextSlideIndex].classList.add('active');
            showSlide(nextSlideIndex, carouselId);
        }
    }
}

// Initial slide
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide, 'carousel1'); // Adjust 'carousel1' to the ID of your initial carousel
});

// Event listeners for image click to open in lightbox
document.querySelectorAll('.carousel-item img').forEach(img => {
    img.addEventListener('click', () => {
        const fullSrc = img.getAttribute('data-full');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = fullSrc;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox on click outside the image
document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
