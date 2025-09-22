

document.addEventListener("DOMContentLoaded", () => {
    const text = "Euphrates Gilpin";
    const target = document.querySelector(".hero-content h1");
    let i = 0;

    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    target.textContent = ""; // clear first
    type();


});

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width, height;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let t = 0;

function draw() {
    t += 0.005;

    ctx.clearRect(0, 0, width, height);

    // Gradient background
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#0a0a0a");
    grad.addColorStop(1, "#1a1a2e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Wavy lines
    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x <= width; x += 20) {
            const y =
                height / 2 +
                Math.sin(x * 0.002 + t * (1 + i * 0.2)) * (50 + i * 15);
            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(255,255,255,${0.05 + i * 0.02})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }

    requestAnimationFrame(draw);
}

draw();