document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const surpriseScreen = document.getElementById("surprise-screen");
    const openBtn = document.getElementById("open-surprise-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    let isPlaying = false;

    // Open Surprise Button Click Handler
    openBtn.addEventListener("click", () => {
        // Hide Screen 1
        welcomeScreen.classList.remove("active");
        welcomeScreen.classList.add("hidden");

        // Show Screen 2
        setTimeout(() => {
            surpriseScreen.classList.remove("hidden");
            surpriseScreen.classList.add("active");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);

        // Play Music
        playAudio();
    });

    // Audio Control Function
    function playAudio() {
        if (bgMusic) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicBtn.textContent = "🔊";
            }).catch(err => {
                console.log("Autoplay blocked or audio missing:", err);
            });
        }
    }

    // Toggle Music Button Click
    musicBtn.addEventListener("click", () => {
        if (!bgMusic) return;

        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            musicBtn.textContent = "🔇";
        } else {
            bgMusic.play();
            isPlaying = true;
            musicBtn.textContent = "🔊";
        }
    });
});
