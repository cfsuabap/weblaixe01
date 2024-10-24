document.addEventListener('DOMContentLoaded', function() {
    const bannerContainer = document.querySelector('.banner-container');
    const banners = document.querySelectorAll('.banner');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalBanners = banners.length;

    function showBanner(index) {
        bannerContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextBanner() {
        currentIndex = (currentIndex + 1) % totalBanners;
        showBanner(currentIndex);
    }

    function prevBanner() {
        currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
        showBanner(currentIndex);
    }

    nextBtn.addEventListener('click', nextBanner);
    prevBtn.addEventListener('click', prevBanner);

    // Tự động chuyển banner sau mỗi 5 giây
    setInterval(nextBanner, 5000);
});

// Testimonial Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialPrevBtn = document.querySelector('.testimonial-slider .prev-btn');
const testimonialNextBtn = document.querySelector('.testimonial-slider .next-btn');

let testimonialIndex = 0;

function moveTestimonialSlider() {
    testimonialContainer.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

function showNextTestimonial() {
    testimonialIndex++;
    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }
    moveTestimonialSlider();
}

function showPrevTestimonial() {
    testimonialIndex--;
    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }
    moveTestimonialSlider();
}

testimonialNextBtn.addEventListener('click', showNextTestimonial);
testimonialPrevBtn.addEventListener('click', showPrevTestimonial);

// Auto-slide for testimonials
setInterval(showNextTestimonial, 5000);
