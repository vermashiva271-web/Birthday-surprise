document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const restartBtn = document.querySelector(".restart-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    let currentPage = 0;
    let isPlaying = false;

    // Show current page function
    function showPage(index) {
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.remove("hidden");
                page.classList.add("active");
            } else {
                page.classList.remove("active");
                page.classList.add("hidden");
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Audio Control
    function playAudio() {
        if (bgMusic && !isPlaying) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicBtn.textContent = "🔊";
            }).catch(err => {
                console.log("Audio play error:", err);
            });
        }
    }

    // Next Page Buttons
    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            playAudio(); // Music plays when clicking Start/Next
            if (currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            }
        });
    });

    // Previous Page Buttons
    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        });
    });

    // Restart Story Button
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            currentPage = 0;
            showPage(currentPage);
        });
    }

    // Toggle Music Button
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
document.querySelectorAll('.main-btn').forEach(button => {
    button.addEventListener('click', () => {
        const music = document.getElementById('bg-music');
        if (music) {
            music.play();
        }
    });
});
w
