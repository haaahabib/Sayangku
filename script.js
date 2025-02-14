document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img");
    const loveButton = document.getElementById("love-button");
    const content = document.getElementById("content");
    const typingText = document.getElementById("typing-text");
    let currentIndex = 0;

    if (!window.musicPlayer) {
        window.musicPlayer = new Audio("song/anugerah.mp3");
        window.musicPlayer.loop = true;
        window.musicPlayer.volume = 1;
    }

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 10000);
    showImage(currentIndex);

    function typeText(index = 0, wordIndex = 0, currentSentence = "") {
        const textToType = [
            "Hai cantik",
            "Selamat Anniversary kita ke 4 Bulan",
            "Selamat Hari Valentine juga sayang",
            "",
            "Jadi inget pertama kali aku bilang",
            '"Kalau mau kamu jadi milikku"',
            "",
            "Sekarang kita udah bersama",
            "Walaupun banyak masalah di hubungan kita",
            "Kita harus bisa saling memaafkan terus ya",
            "Terima kasih ya sayang karena udah sabar",
            "Aku beruntung banget punya kamu",
            "",
            "Semoga kita tetap bersama sampai nanti ya 💗"
        ];

        if (index < textToType.length) {
            let sentence = textToType[index].split(" ");
            if (wordIndex < sentence.length) {
                currentSentence += sentence[wordIndex] + " ";
                typingText.innerHTML = currentSentence;
                setTimeout(() => typeText(index, wordIndex + 1, currentSentence), 350);
            } else {
                typingText.innerHTML += "<br>";
                setTimeout(() => typeText(index + 1, 0, typingText.innerHTML), 1000);
            }
        }
    }

    loveButton.addEventListener("click", () => {
        loveButton.style.display = "none";
        content.classList.remove("hidden");
        content.classList.add("show");

        if (window.musicPlayer.paused) {
            window.musicPlayer.play();
        }

        setTimeout(() => typeText(), 1000);
    });
});
