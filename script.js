document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
// skills time line
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineCircle = document.querySelector(".timeline-circle");
    const timelineLine = document.querySelector(".timeline-line");

    let index = 0;
    let totalHeight = timelineItems[timelineItems.length - 1].offsetTop; // Last item position

    function moveCircle() {
        if (index < timelineItems.length) {
            let item = timelineItems[index];
            let itemTop = item.offsetTop;

            // Move circle to current item
            timelineCircle.style.top = itemTop + "px";

            // Highlight the current item
            timelineItems.forEach((el) => el.classList.remove("active"));
            item.classList.add("active");

            // Extend the vertical line
            timelineLine.style.height = itemTop + "px";

            // Wait for 15 seconds before moving to the next skill
            index++;
            setTimeout(moveCircle, 2000);
        } else {
            // Fix the circle at the last position & extend the line fully
            timelineCircle.style.top = totalHeight + "px";
            timelineLine.style.height = totalHeight + "px";
        }
    }

    // Start the animation
    moveCircle();
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
        setTimeout(() => shootingStar.remove(), 8000); // Remove after animation
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
