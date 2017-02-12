const incrementScore = () => {
  let score = $('#score').html();
  let newScore = parseInt(score) + 100
  $('#score').html(newScore.toString());
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

const collisionTest = (alien, bullet) => {
  let alienX1 = alien.localToGlobal(0,0).x;
  let alienX2 = alien.localToGlobal(0,0).x + alien.image.width;
  let alienY1 = alien.localToGlobal(0,0).y;
  let alienY2 = alien.localToGlobal(0,0).y + alien.image.height;

  let bulletX1 = bullet.x;
  let bulletX2 = bullet.x + bullet.image.width;
  let bulletY1 = bullet.y;
  let bulletY2 = bullet.y + bullet.image.height;

  if (((bulletX1 >= alienX1 && bulletX1 <= alienX2) || (bulletX2 >= alienX1 && bulletX2 <= alienX2)) &&
    ((bulletY1 <= alienY2 && bulletY1 >= alienY1) || (bulletY2 <= alienY2 && bulletY2 >= alienY1))) {
      return true;
  } else {
    return false
  }
}

export { incrementScore, updateLives, gameOver, collisionTest};
