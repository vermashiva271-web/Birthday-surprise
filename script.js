const NAME = "ANSHUU ❤️";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Preloader Hide Karein
    const loader = document.getElementById("loader") || document.querySelector(".loader") || document.querySelector(".preloader");
    if (loader) {
        loader.style.display = "none";
    }
    document.body.classList.remove("loading");

    // 2. Name Injector
    const nameElements = document.querySelectorAll(".birthday-name, #person-name");
    nameElements.forEach(el => el.textContent = NAME);

    // 3. Audio Setup
    const bgMusic = new Audio("assets/music/birthday.mp3");
    bgMusic.loop = true;

    let musicStarted = false;
    const startAudio = () => {
        if (!musicStarted) {
            bgMusic.play().then(() => {
                musicStarted = true;
            }).catch(err => console.log("Audio play deferred:", err));
        }
    };

    document.body.addEventListener("click", startAudio, { once: true });
    document.body.addEventListener("touchstart", startAudio, { once: true });

    // 4. Interactive Elements
    const interactiveElements = document.querySelectorAll(".envelope, .gift-box, .open-btn");
    interactiveElements.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("open");
            startAudio();
        });
    });

    // 5. Navigation
    const navButtons = document.querySelectorAll("[data-next-screen]");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const nextId = btn.getAttribute("data-next-screen");
            const targetScreen = document.getElementById(nextId);
            if (targetScreen) {
                targetScreen.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
