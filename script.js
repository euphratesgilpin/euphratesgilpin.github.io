// /* .js files add interaction to your website */
//
// var factList = [
// 	"The most subscribed (solo) male YouTube channel is PewDiePie, with 110 million subscribers, but the most subscribed (solo) female channel is SSSniperwolf, with 29 million subscribers.",
//
// 	"Many male streamers of Twitch can average upwards of 100k viewers in a single stream, but even the biggest female streamers often never pass 25k.",
//
// 	"The highest viewership on a Twitch stream ever was almost 2.5 million, by Spanish streamer, TheGrefg. The highest viewership of a female streamer, CaptainPuffy, was 130k viewers.",
//
// 	"In the top 100 most-watched streamers on Twitch in 2021, only two are female: Pokimane and Hafu."
//
//
// ];
//
// var fact = document.getElementById("fact");
// var button = document.getElementById("button1");
// var count = 0;
//
// button.addEventListener("click", displayFact);
//
// function displayFact() {
// 	fact.innerHTML = factList[count];
// 	count++;
// 	if (count == factList.length) {
// 		count = 0;
// 	}
// }

// Example: Typing effect for the hero text
// document.addEventListener("DOMContentLoaded", () => {
//     const text = "Hey, I'm Euphrates";
//     const target = document.querySelector(".hero h1");
//     let i = 0;
//
//     function type() {
//         if (i < text.length) {
//             target.textContent += text.charAt(i);
//             i++;
//             setTimeout(type, 100);
//         }
//     }
//
//     target.textContent = ""; // clear first
//     type();
//
//
// });

const bgCanvas = document.getElementById("bg-canvas");
const bgCtx = bgCanvas.getContext("2d");
const noiseCanvas = document.getElementById("noise-canvas");
const noiseCtx = noiseCanvas.getContext("2d");

let width, height;

function resize() {
    width = bgCanvas.width = noiseCanvas.width = window.innerWidth;
    height = bgCanvas.height = noiseCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Background animation
let t = 0;
function drawBackground() {
    t += 0.005;

    bgCtx.clearRect(0, 0, width, height);

    // Gradient background
    const grad = bgCtx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#0a0a0a");
    grad.addColorStop(1, "#1a1a2e");
    bgCtx.fillStyle = grad;
    bgCtx.fillRect(0, 0, width, height);

    // Wavy organic lines
    for (let i = 0; i < 6; i++) {
        bgCtx.beginPath();
        bgCtx.moveTo(0, height / 2);

        for (let x = 0; x <= width; x += 20) {
            const y =
                height / 2 +
                Math.sin(x * 0.002 + t * (1 + i * 0.2)) * (50 + i * 15);
            bgCtx.lineTo(x, y);
        }

        bgCtx.strokeStyle = `rgba(255,255,255,${0.05 + i * 0.02})`;
        bgCtx.lineWidth = 1.5;
        bgCtx.stroke();
    }

    requestAnimationFrame(drawBackground);
}
drawBackground();

// Noise overlay
function generateNoise() {
    const imageData = noiseCtx.createImageData(width, height);
    const buffer = new Uint32Array(imageData.data.buffer);
    for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.random() < 0.5 ? 0xff000000 : 0xffffffff; // black or white pixel
    }
    noiseCtx.putImageData(imageData, 0, 0);
}
setInterval(generateNoise, 50); // refresh every 50ms
