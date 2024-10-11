/* .js files add interaction to your website */

var factList = [
	"The most subscribed (solo) male YouTube channel is PewDiePie, with 110 million subscribers, but the most subscribed (solo) female channel is SSSniperwolf, with 29 million subscribers.",

	"Many male streamers of Twitch can average upwards of 100k viewers in a single stream, but even the biggest female streamers often never pass 25k.",

	"The highest viewership on a Twitch stream ever was almost 2.5 million, by Spanish streamer, TheGrefg. The highest viewership of a female streamer, CaptainPuffy, was 130k viewers.",

	"In the top 100 most-watched streamers on Twitch in 2021, only two are female: Pokimane and Hafu."

	
];

var fact = document.getElementById("fact");
var button = document.getElementById("button1");
var count = 0;

button.addEventListener("click", displayFact);

function displayFact() {
	fact.innerHTML = factList[count];
	count++;
	if (count == factList.length) {
		count = 0;
	}
}