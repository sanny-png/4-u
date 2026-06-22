document.addEventListener("DOMContentLoaded", () => {

// 📸 Slideshow
const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg"
];

let current = 0;

setInterval(() => {
    let slide = document.getElementById("slide");
    if (!slide) return;

    slide.style.opacity = 0;

    setTimeout(() => {
        current++;
        if (current >= photos.length) current = 0;
        slide.src = photos[current];
        slide.style.opacity = 1;
    }, 500);
}, 3000);


// 🎵 Smooth music start
window.addEventListener("click", () => {
    let music = document.getElementById("bgMusic");
    if (!music) return;

    music.volume = 0;
    music.play().catch(() => {});

    let fade = setInterval(() => {
        if (music.volume < 1) {
            music.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);
}, { once: true });


// 💗 Floating hearts (SAFE)
const canvas = document.getElementById("hearts");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    function createHeart() {
        hearts.push({
            x: Math.random() * canvas.width,
            y: canvas.height,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 2 + 1
        });
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        hearts.forEach((h, i) => {
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
            ctx.fill();

            h.y -= h.speed;

            if (h.y < 0) hearts.splice(i, 1);
        });

        requestAnimationFrame(drawHearts);
    }

    setInterval(createHeart, 300);
    drawHearts();
}

});


// 💖 Yes button (must stay OUTSIDE)
function yesAnswer() {
    document.getElementById("result").innerHTML =
        "I knew it 😌❤️<br>You're stuck with me now.";

    document.body.style.background =
        "linear-gradient(135deg,#ff758c,#ff7eb3)";
}


// 😭 No button escapes
function moveButton() {
    let btn = document.getElementById("noBtn");

    let maxX = window.innerWidth - btn.offsetWidth;
    let maxY = window.innerHeight - btn.offsetHeight;

    btn.style.position = "absolute";
    btn.style.left = Math.random() * maxX + "px";
    btn.style.top = Math.random() * maxY + "px";
}


// 👀 Secret message
function revealMessage() {
    document.getElementById("secret").innerHTML =
        "I made all of this just for you ❤️";
}