const secretWords = [
  "Ali",
  "Homayoun",
  "Mohammad",
  "Reza",
  "Masoud",
  "Ailin",
  "Zahra",
  "Mahsa",
  "Mahya",
  "Hassan",
  "Majid",
  "Nasim",
  "Negin",
  "Aria",
  "Azade",
  "Shirin"
];
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;
function setUnderScores() {
  let splitedWords = randomItem.split("");
  let mappedWords = splitedWords.map((letter) =>
    clicked.indexOf(letter) >= 0 ? letter : "_"
  );
  // console.log(mappedWords);
  result = mappedWords.join("");
  document.getElementById("clue").innerHTML = `<p> ${result} </p>`;
}
function selectRandomItem() {
  randomItem = secretWords[Math.floor(Math.random() * secretWords.length)];
  console.log(randomItem);
  document.getElementById("letters").addEventListener("click", buttonHandler);
  window.addEventListener('keydown',keyHandler);
}
function checkIfWon() {
  if (randomItem === result) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document.getElementById("image").querySelector("img").src =
      "images/winner.png";
  }
}
function checkIfLost(){
  if(mistakes === 6){
    document.getElementById('gameover').querySelector('p').style.display = "block"
    document.getElementById('clue').innerHTML = `<p>random word is ${randomItem} </p>`;
  }
}
function updateHangManPic(){
const image = document.getElementById('image').querySelector('img');
image.src = `images/hangman${mistakes}.png`;
}

function letterHandler(letter) {
  letter = letter.toLowerCase();
  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = "used";

  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomItem.indexOf(letter) === -1) {
    mistakes++;
checkIfLost()
updateHangManPic();
  }
}

function buttonHandler(event) {
  letterHandler(event.target.id);
}

function keyHandler(event){
  letterHandler(event.key);
}

selectRandomItem();
setUnderScores();
