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

const updateLives = (stage) => {
  let lives = $('.lives').html();
  let newLives = parseInt(lives) - 1;
  if (newLives === 0) {
    $('.lives').html(newLives.toString());
    stage.removeAllChildren();
    let text = new createjs.Text("Game Over", "20px Arial", "#ff7700");
    text.x = canvas.width/2 - 50;
    text.y = canvas.height/2-20;
    stage.addChild(text);
    stage.update();
  } else {
    $('.lives').html(newLives.toString());
  }
}

const gameOver = () => {

}

export { incrementScore, updateLives, gameOver};
