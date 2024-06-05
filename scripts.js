document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
    var words = [
        document.getElementById('word1'),
        document.getElementById('word2'),
        document.getElementById('word3')
    ];

    function showWord(word, delay) {
        setTimeout(function () {
            word.style.opacity = 1;
        }, delay);
    }

    function hideWord(word, delay) {
        setTimeout(function () {
            word.style.opacity = 0;
        }, delay);
    }

    function hidePreloader() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }

    window.addEventListener("load", function () {
        var totalTime = 0;
        var displayTime = 700;
        var interval = 400;

        for (var i = 0; i < words.length; i++) {
            showWord(words[i], totalTime);
            hideWord(words[i], totalTime + displayTime);
            totalTime += displayTime + interval;
        }

        var logo = document.getElementById('logo');
        if (logo) {
            logo.addEventListener('click', function () {
                location.reload();
            });
        }

        setTimeout(hidePreloader, totalTime);
    });

    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds

    const btns = document.querySelectorAll(".btn");
    const slideRow = document.getElementById("slide-row");
    const main = document.querySelector("main");

    let currentIndex = 0;

    function updateSlide() {
        const mainWidth = main.offsetWidth;
        const translateValue = currentIndex * -mainWidth;
        slideRow.style.transform = `translateX(${translateValue}px)`;

        btns.forEach((btn, index) => {
            btn.classList.toggle("active", index === currentIndex);
        });
    }

    btns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            updateSlide();
        });
    });

    window.addEventListener("resize", () => {
        updateSlide();
    });
});
