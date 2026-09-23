/* =========================================================
   RIYA BIRTHDAY SURPRISE
   PREMIUM JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SELECT ELEMENTS
    ===================================================== */

    const preloader = document.getElementById("preloader");
    const firstPage = document.getElementById("firstPage");
    const surprisePage = document.getElementById("surprisePage");
    const openSurprise = document.getElementById("openSurprise");

    const heartsContainer = document.getElementById("heartsContainer");
    const confettiContainer = document.getElementById("confettiContainer");


    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader) {
                preloader.classList.add("hidden");
            }

        }, 1200);

    });


    /* =====================================================
       INITIAL PAGE STATE
    ===================================================== */

    if (surprisePage) {
        surprisePage.classList.remove("show");
    }

    if (firstPage) {
        firstPage.style.display = "flex";
    }


    /* =====================================================
       OPEN MY SURPRISE
    ===================================================== */

    if (openSurprise) {

        openSurprise.addEventListener("click", () => {

            /* Prevent multiple clicks */

            openSurprise.disabled = true;


            /* Button animation */

            openSurprise.style.transform = "scale(0.95)";


            setTimeout(() => {

                /* Hide first page */

                if (firstPage) {
                    firstPage.style.display = "none";
                }


                /* Show second page */

                if (surprisePage) {

                    surprisePage.classList.add("show");

                    surprisePage.style.display = "block";

                }


                /* Go to top */

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /* Start celebration */

                createHearts();

                createConfetti();


                /* Extra celebration after short delay */

                setTimeout(() => {
                    createHearts();
                }, 1200);

                setTimeout(() => {
                    createConfetti();
                }, 700);


            }, 350);

        });

    }


    /* =====================================================
       COUNTDOWN
       Birthday: 09 October 2026
       ===================================================== */

    const birthdayDate = new Date(
        "October 9, 2026 00:00:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = birthdayDate - now;


        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");


        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            return;
        }


        /* Birthday arrived */

        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }


        /* Calculate time */

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );


        const minutes = Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );


        const seconds = Math.floor(
            (difference % (1000 * 60))
            / 1000
        );


        /* Display */

        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }


    /* Run immediately */

    updateCountdown();


    /* Update every second */

    setInterval(updateCountdown, 1000);



    /* =====================================================
       CREATE FALLING HEARTS
       ===================================================== */

    function createHearts() {

        if (!heartsContainer) {
            return;
        }


        /* Remove old hearts */

        heartsContainer.innerHTML = "";


        const heartSymbols = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💞",
            "💘"
        ];


        for (let i = 0; i < 35; i++) {

            const heart = document.createElement("div");

            heart.classList.add("falling-heart");


            /* Random heart */

            heart.innerHTML =
                heartSymbols[
                    Math.floor(
                        Math.random() * heartSymbols.length
                    )
                ];


            /* Random position */

            heart.style.left =
                Math.random() * 100 + "%";


            /* Random size */

            heart.style.fontSize =
                (12 + Math.random() * 22) + "px";


            /* Random animation duration */

            heart.style.animationDuration =
                (4 + Math.random() * 4) + "s";


            /* Random delay */

            heart.style.animationDelay =
                Math.random() * 2 + "s";


            heartsContainer.appendChild(heart);


            /* Remove after animation */

            setTimeout(() => {

                if (heart.parentNode) {
                    heart.remove();
                }

            }, 9000);

        }

    }



    /* =====================================================
       CREATE CONFETTI
       ===================================================== */

    function createConfetti() {

        if (!confettiContainer) {
            return;
        }


        /* Remove old confetti */

        confettiContainer.innerHTML = "";


        for (let i = 0; i < 90; i++) {

            const confetti =
                document.createElement("div");


            confetti.classList.add("confetti");


            /* Random horizontal position */

            confetti.style.left =
                Math.random() * 100 + "%";


            /* Random size */

            confetti.style.width =
                (5 + Math.random() * 8) + "px";


            confetti.style.height =
                (8 + Math.random() * 15) + "px";


            /* Random animation */

            confetti.style.animationDuration =
                (3 + Math.random() * 4) + "s";


            confetti.style.animationDelay =
                Math.random() * 2 + "s";


            /* Random rotation */

            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            confettiContainer.appendChild(confetti);


            /* Remove */

            setTimeout(() => {

                if (confetti.parentNode) {
                    confetti.remove();
                }

            }, 8000);

        }

    }



    /* =====================================================
       NAVBAR LINKS
       ===================================================== */

    const navLinks =
        document.querySelectorAll(".desktop-nav a");


    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (!targetId) {
                return;
            }


            /* First page */

            if (targetId === "#firstPage") {

                event.preventDefault();


                if (surprisePage) {
                    surprisePage.classList.remove("show");
                    surprisePage.style.display = "none";
                }


                if (firstPage) {
                    firstPage.style.display = "flex";
                }


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });


                /* Enable button again */

                if (openSurprise) {
                    openSurprise.disabled = false;
                    openSurprise.style.transform = "";
                }

                return;
            }


            /* Second page links */

            if (
                targetId === "#surprisePage" ||
                targetId === "#gallery" ||
                targetId === "#message" ||
                targetId === "#final"
            ) {

                /* Make sure second page is visible */

                if (
                    surprisePage &&
                    !surprisePage.classList.contains("show")
                ) {

                    event.preventDefault();


                    if (firstPage) {
                        firstPage.style.display = "none";
                    }


                    surprisePage.style.display = "block";

                    surprisePage.classList.add("show");


                    setTimeout(() => {

                        const target =
                            document.querySelector(targetId);

                        if (target) {

                            target.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }, 100);

                }

            }

        });

    });



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "#message, #gallery, #final"
        );


    window.addEventListener("scroll", () => {

        if (!surprisePage) {
            return;
        }


        if (
            !surprisePage.classList.contains("show")
        ) {
            return;
        }


        let currentSection = "";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 250;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });



    /* =====================================================
       IMAGE ERROR HANDLER
       ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.style.display = "none";


            const parent =
                image.parentElement;


            if (parent) {

                parent.style.background =
                    "linear-gradient(135deg, #ffe0eb, #f2dcf8)";


                parent.setAttribute(
                    "data-image-error",
                    "Image not found"
                );

            }

        });

    });



    /* =====================================================
       PHOTO CARD CLICK EFFECT
       ===================================================== */

    const photoCards =
        document.querySelectorAll(".photo-card");


    photoCards.forEach((card) => {

        card.addEventListener("click", () => {

            card.classList.toggle("photo-active");

        });

    });



    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    if (openSurprise) {

        openSurprise.addEventListener(
            "mousedown",
            function (event) {

                const ripple =
                    document.createElement("span");


                ripple.classList.add("button-ripple");


                const rect =
                    openSurprise.getBoundingClientRect();


                ripple.style.left =
                    event.clientX - rect.left + "px";


                ripple.style.top =
                    event.clientY - rect.top + "px";


                openSurprise.appendChild(ripple);


                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    }



    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%c❤️ Happy Birthday Riya ❤️",
        "font-size: 24px; color: #ff4f81; font-weight: bold;"
    );

    console.log(
        "%cMade with love by Md Masum Parvej",
        "font-size: 15px; color: #8e44ad;"
    );

});