/* Variables */
let start = false;
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level = 1;
let memory = [];
let sequence = [];
let roundPattern = [];
let user;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;


/* Start function */
window.addEventListener('load', () => {
    let tiles = document.querySelector("#number");
    let begin = document.querySelector("#btn");
    let cards = cardsContainer.children;
    console.log(begin);
    begin.addEventListener("click", function() {
        console.log('meme')
      start = true;
      tilePositions = randomTilesPositions(level)
      console.log(tilePositions);
      tilePositions.forEach((position, index) => {
      let tile = tiles[position - 1];
      whichToChange();
    });

    begin.addEventListener("click", () => {
    if (tiles == true && true);
        userCounter++;

    for(let i = 0; i < userCounter.length; i ++){
        if (memory[i] != user[i]) {
            matchingArrays = false;
        }
    }
    if(matchArrays){
        playerArray = [];
        memoryCounter = [];
        levelCounter = [];
        newMemory = [];
        /*setTimeout(function() {startMemory =
            setInterval(start, 500);}, 500);*/
    }
})

function numberChange(){
  randomNum = Math.floor(Math.random() * 16 + 1);
  let hashtag = "#";
  return hashtag.concat(randomNum.toString());
}

function getColour(){
  let colour = ["#bee9e8"];
  randomNum = Math.floor(Math.random() * 4);
  return(colour[randomNum]);
}
function whichToChange(){
    number = numberChange();
    colour = getColour();
  $(number).css("background-color", colour);
}

function nextLevel() {
    random = tiles[Math.floor(math.random) * number.length];
    return random;
}

function show() {
  hashtag = ["#"];
  let h = 0;
  for (h = 0; h <= hashtag.length; h++) {
    if (h === hashtag.length) {
      lightUp("run", h);
    } else {
      lightUp(hashtag[h], h);
    }
  }
  console.log("Running show with: " + hashtag);
  return hashtag;
}

function lightUp(name, number) {
    setTimeout(function() {
      if (name === number) {
        playerTurn = true;
      } else {
        selected = name;
      }
    }, 500 * number);
}
    setTimeout(function() {
    levelCounter++;
}, 500);
/* round update */
let updateRound = function(){
    rounds++;
  $("showRounds").css("showRounds");
};

/* play round function */
function playRound(nextSequence) {
    nextSequence.forEach(function(number, index) {
      setTimeout(function() {
        tileActivate(number);
      }, (index + 1) * 500);
  });
  return nextSequence;
}