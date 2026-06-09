const bgMusic = new Audio("song.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;
let isPlaying = false;

const startButton = document.querySelector("#startButton");
const randomChaosButton = document.querySelector("#randomChaosButton");
const musicButton = document.querySelector("#musicButton");

const funZone = document.querySelector("#funZone");

const toast = document.querySelector("#toast");

const roastButton = document.querySelector("#roastButton");
const roastText = document.querySelector("#roastText");

const chaosScore = document.querySelector("#chaosScore");
const laughMeter = document.querySelector("#laughMeter");
const badgeCount = document.querySelector("#badgeCount");

const spinButton = document.querySelector("#spinButton");
const wheel = document.querySelector("#wheel");
const dareText = document.querySelector("#dareText");

const snackButton = document.querySelector("#snackButton");
const snackScore = document.querySelector("#snackScore");

const prankButton = document.querySelector("#prankButton");
const prankText = document.querySelector("#prankText");

const quizOptions = document.querySelector("#quizOptions");
const quizResult = document.querySelector("#quizResult");

const awardCards = document.querySelectorAll(".award-card");

const confettiLayer = document.querySelector("#confettiLayer");

let points = 0;
let laughs = 0;
let snacks = 0;
let rotation = 0;

const roasts = [
"Apke paas toh ajeeb hi talent hai, bolte hi samne wala 'mute' button dhoondne lagta hai.🤪",
"Apki sakal dekh k lgta h ki bhgwan ne apko TRIAl VERSION me bnaya tha 💀",
"Hmare bina room dekh ke lagta hai CID raid hui hai 😂",
"Apko dekh k lgta h bhgwan ne bhi copy-paste kiya tha but aap me error aa gaya.",
"Bhai thoda kmm bhaauu bhaauu kiya kar,apke muh se pollution zyada nikalta hai HEHEHEHEHE 😂",
"Apki baatein sunn ke lagta hai dimaag bech ke samosa kha gaya 🔋"
];

const dares = [

"👑 Papa ji ko prince treatment de 😭",
"🌸 Mumma ko princess treatment de",
"😈 Chote Don k pao dabao VIP service ke saath 💅",
"🤡 Arju ke 5 kaam bina argue kiye krr",
"🍟 Sabke ek ek kaam krr",
"📱 Ek din pura mumma k saath rh 💀"
];

const quizAnswers = [
{
text:"Saamaan Failana",
correct:true
},
{
text:"Baat na maan na",
correct:true
},
{
text:"Normal rehna",
correct:false
},
{
text:"Inactive rhna",
correct:true
}
];

function showToast(message){

toast.innerText = message;

toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},2000);

}

function updateStats(){

chaosScore.innerText = points;

laughMeter.innerText = laughs + "%";

badgeCount.innerText =
document.querySelectorAll(".award-card.is-found").length + "/6";

}

function addPoints(num){

points += num;

laughs = Math.min(100,laughs + num);

updateStats();

if(points >= 50 && !document.querySelector(".ultimate")){

const box = document.createElement("div");

box.className = "panel ultimate";

box.innerHTML = `
<h2>🏆 Ultimate Bhai Award</h2>
<p>
Chahe kitna bhi bhoko...
aap best bhaauu bhaauu hai 😭❤️
</p>
`;

funZone.appendChild(box);

showToast("Ultimate Bhaauu bhaauu Mode Unlocked 🔥");

createConfetti(120);

}

}

function createConfetti(count){

for(let i=0;i<count;i++){

const confetti = document.createElement("div");

confetti.className = "confetti";

confetti.style.left =
Math.random()*100 + "%";

confetti.style.background =
["#ffd447","#ff4f8b","#13c9a8","#3b82f6"][Math.floor(Math.random()*4)];

confetti.style.animationDuration =
(Math.random()*2+2)+"s";

confettiLayer.appendChild(confetti);

setTimeout(()=>{
confetti.remove();
},4000);

}

}

musicButton.addEventListener("click", () => {

if(isPlaying){

bgMusic.pause();

musicButton.innerText = "♪";

showToast("Music band 😭");

}else{

bgMusic.play();

musicButton.innerText = "⏸";

showToast("Bhai anthem started 🔥");

}

isPlaying = !isPlaying;

});

startButton.addEventListener("click",()=>{

funZone.classList.add("is-open");

showToast("Tamasha successfully shuru 😭🔥");

createConfetti(100);

addPoints(10);

funZone.scrollIntoView({
behavior:"smooth"
});

});

randomChaosButton.addEventListener("click",()=>{

const random = [
"kapde fir se faila rkhe hai 🚨",
"Mummy investigation mode ON 👀",
"Free food detected 🍕",
"Bhai ka ego updated 😎"
];

showToast(
random[Math.floor(Math.random()*random.length)]
);

createConfetti(50);

addPoints(5);

});

roastButton.addEventListener("click",()=>{

roastText.innerText =
roasts[Math.floor(Math.random()*roasts.length)];

showToast("Beizzati successful 😭");

addPoints(5);

});

spinButton.addEventListener("click",()=>{

rotation += 720;

wheel.style.transform =
`rotate(${rotation}deg)`;

dareText.innerText =
dares[Math.floor(Math.random()*dares.length)];

showToast("Kismat activated 😈");

addPoints(8);

});

snackButton.addEventListener("click",()=>{

snacks++;

snackScore.innerText = snacks;

snackButton.style.left =
Math.random()*80 + "%";

snackButton.style.top =
Math.random()*70 + "%";

snackButton.innerText =
["🍕","🍟","🍩","🍪","🍫"][snacks%5];

showToast("Snack pakda gaya 🍕");

addPoints(3);

});

prankButton.addEventListener("mouseover",()=>{

prankButton.style.left =
Math.random()*80 + "%";

prankButton.style.top =
Math.random()*70 + "%";

});

prankButton.addEventListener("click",()=>{

prankText.innerText =
"HOW ARE YOU CLICKING THIS 😭";

showToast("Illegal click detected 💀");

createConfetti(80);

addPoints(12);

});

awardCards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.add("is-found");

showToast("Badge unlocked 🏆");

createConfetti(30);

addPoints(6);

});

});

quizAnswers.forEach(answer=>{

const button = document.createElement("button");

button.innerText = answer.text;

button.addEventListener("click",()=>{

if(answer.correct){

button.style.background =
"#a3e635";

quizResult.innerText =
"Correct 😭🔥";

showToast("Bhaauu bhaauu certified");

addPoints(7);

}else{

button.style.background =
"#ffb3c7";

quizResult.innerText =
"Ye kbhi nhi ho skta 💀";

showToast("Galat jawab 🤡");

addPoints(2);

}

});

quizOptions.appendChild(button);

});

updateStats();