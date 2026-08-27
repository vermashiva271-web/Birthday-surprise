// Birthday Person Name (yahan naam change karein)
const NAME = "ANSHUU ❤️";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Name Injector
    const nameElements = document.querySelectorAll(".birthday-name, #person-name");
    nameElements.forEach(el => el.textContent = NAME);

    // 2. Audio Setup & Play on First Interaction
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

    // Screen tap or button click par audio start
    document.body.addEventListener("click", startAudio, { once: true });
    document.body.addEventListener("touchstart", startAudio, { once: true });

    // 3. Envelope / Gift Box Interactive Animation
    const interactiveElements = document.querySelectorAll(".envelope, .gift-box, .open-btn");
    interactiveElements.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("open");
            startAudio();
        });
    });

    // 4. Smooth Scroll / Cinematic Screen Navigation
    const navButtons = document.querySelectorAll("[data-next-screen]");
    navButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const nextId = btn.getAttribute("data-next-screen");
            const targetScreen = document.getElementById(nextId);
            if (targetScreen) {
                targetScreen.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
