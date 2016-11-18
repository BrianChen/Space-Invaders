const incrementScore = () => {
  let score = $('.score').html();
  let newScore = parseInt(score) + 100
  $('.score').html(newScore.toString());
}

// const newWave = (stage) => {
//   stage.
// }

const gotHit = () => {

}

const updateLives = () => {
  let lives = $('.lives').html();
  let newLives = parseInt(lives) - 1;
  if (newLives === 0){
    //game over
  } else {
    $('.lives').html(newLives.toString());
  }
}

export { incrementScore, updateLives };
