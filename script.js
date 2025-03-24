document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
// skills time line
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    items.forEach((item) => observer.observe(item));
});


// Stars apply
document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
    document.body.appendChild(starsContainer);

    const numStars = 100; // Number of stars
    const numShootingStars = 3; // Number of shooting stars

    // Function to create stars
    function createStar() {
        const star = document.createElement("span");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random twinkle speed
        starsContainer.appendChild(star);
    }

    // Function to create shooting stars
    function createShootingStar() {
        const shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");
        shootingStar.style.top = Math.random() * 50 + "vh";
        shootingStar.style.left = Math.random() * 100 + "vw";
        shootingStar.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(shootingStar);

        setTimeout(() => shootingStar.remove(), 5000); // Remove after animation
    }

    // Generate stars
    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    // Generate shooting stars at intervals
    setInterval(() => {
        createShootingStar();
    }, 3000);
});
