// =======================================
// ABOUT PAGE JAVASCRIPT
// =======================================

// Counter Animation
const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;
            const increment = target / 100;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            observer.unobserve(counter);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

}


// =======================================
// Hero Fade Animation
// =======================================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (!hero) return;

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    }, 200);

});


// =======================================
// Floating Card
// =======================================

const floatingCard = document.querySelector(".floating-card");

if (floatingCard) {

    let position = 0;
    let direction = 1;

    function animate() {

        position += direction * 0.3;

        if (position >= 10) direction = -1;
        if (position <= -10) direction = 1;

        floatingCard.style.transform = `translateY(${position}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}


// =======================================
// Hero Parallax
// =======================================

const heroBg = document.querySelector(".hero-bg");

if (heroBg) {

    window.addEventListener("scroll", () => {

        heroBg.style.transform =
            `translateY(${window.scrollY * 0.25}px) scale(1.05)`;

    });

}


// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =======================================
// Console Branding
// =======================================

console.log(
    "%cAL NOOR CONSTRUCTION",
    "color:#EAB308;font-size:22px;font-weight:bold;"
);

console.log(
    "%cPremium Corporate Website",
    "color:white;font-size:14px;"
);