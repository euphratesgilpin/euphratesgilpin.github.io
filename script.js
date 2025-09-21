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
document.addEventListener("DOMContentLoaded", () => {
    const text = "Hey, I'm Euphrates";
    const target = document.querySelector(".hero h1");
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

document.addEventListener("DOMContentLoaded", () => {

    const text = "Computer Science Student and lifelong Gamer";
    const target = document.querySelector(".hero p");
    let i = 0;

    function type() {
        if (i < text2.length) {
            target2.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    target.textContent = ""; // clear first
    type();

});