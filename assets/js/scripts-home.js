

        $(document).ready(function(){
            $('.slider-1').slick({
                dots: true,
                infinite: true,
                speed: 300,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 5000,
                cssEase:"cubic-bezier(0.2, 0.4, 0.4, 0.9)",
                swipeToSlide: true,
                accessibility: true
            });
        });
   

  
        $(document).ready(function(){
            $('.slider-2').slick({
                dots: true,
                infinite: true,
                speed: 300,
                autoplay: true,
                arrows: true,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                initialSlide: 1,
                cssEase:"cubic-bezier(0.2, 0.4, 0.4, 0.9)",
                swipeToSlide: true,
                accessibility: true
            });
        });
  


        $(document).ready(function () {
            $('.testimonial-slider').slick({
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                adaptiveHeight: true
            });

            const toggleBtn = document.getElementById("mobileToggle");
            const mobileMenu = document.getElementById("mobileMenu");
            toggleBtn.addEventListener("click", () => { mobileMenu.classList.toggle("show"); });
        });



document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const body = document.body;

    toggler.addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });
});




document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.getElementById("navbarCollapse");
    const white = document.querySelector(".logo-white");
    const blue = document.querySelector(".logo-blue");
    const toggler = document.querySelector(".navbar-toggler");

    /* ---- FORCE WHITE LOGO ---- */
    function forceWhiteLogo() {
        white.style.display = "block";
        blue.style.display = "none";
    }

    /* ---- APPLY SCROLL LOGO ---- */
    function applyScrollLogo() {

        // 🔥 If mobile menu is open → ALWAYS WHITE LOGO (STOP HERE)
        if (document.body.classList.contains("menu-open")) {
            forceWhiteLogo();
            return;
        }

        // Normal behavior when menu is NOT open
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
            white.style.display = "none";
            blue.style.display = "block";
        } else {
            navbar.classList.remove("scrolled");
            white.style.display = "block";
            blue.style.display = "none";
        }
    }

    /* ---- INITIAL CHECK ---- */
    applyScrollLogo();


    /* ---- ON SCROLL ---- */
    window.addEventListener("scroll", applyScrollLogo);


    /* ---- MENU OPEN EVENTS ---- */
    navbarCollapse.addEventListener("show.bs.collapse", function () {
        document.body.classList.add("menu-open");
        forceWhiteLogo();
    });

    /* ---- MENU CLOSE EVENTS ---- */
    navbarCollapse.addEventListener("hidden.bs.collapse", function () {
        document.body.classList.remove("menu-open");
        applyScrollLogo();
    });


    /* ---- BODY CLASS FOR TOGGLER ANIMATION ---- */
    toggler.addEventListener("click", function () {
        document.body.classList.toggle("menu-open");
    });

});









    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {

            // CLOSE all first
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });

            // TOGGLE clicked one
            item.classList.toggle('active');
        });
    });



window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});







