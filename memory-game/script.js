const gameContainer = document.getElementById("game");
let cardClickCounter = 0;
let numberOfCards = 10;

let matchedPair = [];
let prevTarget = "";
let scoreDiv = document.querySelector(".score");
let bestDiv = document.querySelector(".best");
let score = 0;
let best = 0;

const formElement = document.querySelector("#form-card-numbers");
const inputElement = document.querySelector("#input-card-numbers");

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}



function createCards() {
  let colorArray = [];
  let hexdigits = "0123456789ABCDEF"
  console.log(numberOfCards, "Number of colors")
  for(i = 0; i < numberOfCards; i += 2) {
    color = "#"
    for(j = 0; j < 6; j++) {
      color += hexdigits[Math.floor(Math.random()*16)]
    }
    colorArray.push(color, color);
  }
  return colorArray;
}

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  
  gameContainer.innerHTML = "";
  id = 0;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "white"
    // newDiv.innerText = "?"

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    newDiv.setAttribute('id', id++);
    newDiv.setAttribute('data-matched', false);
  }
  score = 0;
  scoreDiv.innerText = score;
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  event.target.innerText = "";
  event.target.style.backgroundColor = event.target.className;
  cardClickCounter++;
  matchedPair.length === 2 ? matchedPair = [event.target] : matchedPair.push(event.target)
    if (matchedPair.length == 2 && (matchedPair[0].id === matchedPair[1].id || matchedPair[0].className !== matchedPair[1].className))  {
      setTimeout(function() {
        matchedPair[0].style.backgroundColor = "white";
        matchedPair[1].style.backgroundColor = "white";
        score -=2;
        scoreDiv.innerText = score;
        localStorage.setItem('score', JSON.stringify(score));
      }, 1000);
    } else if (matchedPair[1] && matchedPair[0].className === matchedPair[1].className) {
      matchedPair[0].setAttribute('data-matched', true);
      matchedPair[1].setAttribute('data-matched', true);
      score += 10;
      scoreDiv.innerText = score;
      if (gameOver()) {
        let best = parseInt(JSON.parse(localStorage.getItem('bestScore')));
        if (best < score) {
          best = score;
          bestDiv.innerText = best;
          localStorage.setItem('bestScore', JSON.stringify(best));
        }
      }
    }
  
    //once click counter reaches 2, remove the event listener, add it back after 1 sec
    if (cardClickCounter == 2) {
      const allDivs = gameContainer.querySelectorAll('div');
      for(let div of allDivs) {
        div.removeEventListener("click", handleCardClick);
        setTimeout(function() {
          div.addEventListener("click", handleCardClick);
        }, 1000);
      }
      cardClickCounter = 0;
    }
    removeEventListenerForMatchedCards();
}

function gameOver() {
  let isGameOver = true;
  const allDivs = gameContainer.querySelectorAll('div');
  for(let div of allDivs) {
    if(div.getAttribute('data-matched') == "false") {
      isGameOver = false; 
      break;
    }
  }
  return isGameOver;
}

function removeEventListenerForMatchedCards() {
  let allDivs = gameContainer.querySelectorAll('div');
  for(let div of allDivs) {
    if(div.getAttribute('data-matched') == "true") div.removeEventListener('click', handleCardClick);
  }
}

formElement.addEventListener("submit", function(event) {
  event.preventDefault();
  numberOfCards = parseInt(inputElement.value);
  if (numberOfCards % 2 != 0) numberOfCards += 1;
  shuffledColors = shuffle(createCards());
  createDivsForColors(shuffledColors);
  localStorage.setItem('numberOfCards', JSON.stringify(numberOfCards));
});

if (localStorage.getItem('numberOfCards')) {
  numberOfCards = JSON.parse(localStorage.numberOfCards);
}
let shuffledColors = shuffle(createCards());
createDivsForColors(shuffledColors);

if(localStorage.getItem('bestScore')) {
  bestDiv.innerText = JSON.parse(localStorage.bestScore);
}

// when new game is clicked
newGameButton = document.querySelector('.start');
newGameButton.addEventListener("click", function() {
  createDivsForColors(shuffledColors);
});



