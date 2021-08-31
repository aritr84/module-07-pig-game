'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnholdEl = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
//initialisation---

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//rolling dice functionality
btnRollEl.addEventListener('click', function () {
  if (playing) {
    //generating a random dice roll
    const dice = Math.ceil(Math.random() * 6);
    //console.log(dice);
    //display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for rolled 1: if true switch to next player

    if (dice !== 1) {
      //add to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //console.log(currentScore);
    } else {
      //switch to next player

      switchPlayer();
    }
  }
});

btnholdEl.addEventListener('click', function () {
  if (playing) {
    //add currentscore to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player's score is >=100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
/*
-----my solution--------
btnNewEl.addEventListener('click', function () {
  //remove the player--winner class
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  //reset  the current score
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //reset the total score
  for (let i = 0; i < 2; i++) {
    scores[i] = 0;
  }
  
  score0El.textContent = 0;
  score1El.textContent = 0;

  //active player will be player 0
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  playing = true;

  //hide the dice
  diceEl.classList.add('hidden');
});
*/

// jonas' solution
btnNewEl.addEventListener('click', init);
s;
