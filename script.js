document.addEventListener("DOMContentLoaded", () => {
    // 1. Audio Setup
    const bgMusic = new Audio("assets/music/birthday.mp3");
    bgMusic.loop = true;

    // 2. Open Surprise Button Handler
    const openBtn = document.querySelector(".open-btn") || document.getElementById("open-btn") || document.querySelector("button");
    const mainContent = document.getElementById("main-content") || document.querySelector(".main-content") || document.querySelector(".surprise-box");
    const welcomeScreen = document.querySelector(".welcome-screen") || document.querySelector(".hero-container") || document.querySelector("div");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // Play Music
            bgMusic.play().catch(err => console.log("Audio play error:", err));
            
            // Hide welcome/button screen and show content
            if (welcomeScreen && welcomeScreen !== openBtn.parentElement) {
                welcomeScreen.style.display = "none";
            } else {
                openBtn.style.display = "none";
            }

            if (mainContent) {
                mainContent.style.display = "block";
            }
            
            // Fallback: Scroll down or reload view if needed
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        });
    }
});
