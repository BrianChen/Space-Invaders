const incrementScore = () => {
  let score = $('#score').html();
  let newScore = parseInt(score) + 100;
  $('#score').html(newScore.toString());
}

// const newWave = (stage) => {
//   stage.
// }

const gotHit = () => {

}

const updateLives = (stage) => {
  let lives = $('#lives').html();
  let newLives = parseInt(lives) - 1;
  if (newLives === 0) {
    $('#lives').html(newLives.toString());
    stage.removeAllChildren();
    let text = new createjs.Text("Game Over", "100px Arial", "#ff7700");
    text.x = canvas.width/2 - 100;
    text.y = canvas.height/2;
    let tryAgain = new createjs.Text("try again!", "50px Arial", "white");
    tryAgain.addEventListener("mouseover", () => {
      tryAgain.color = "yellow";
    });
    tryAgain.addEventListener("click", () => {
      $('#canvas').hide(),
      $('.welcome-screen').show();
      $('#scoreTitle').remove();
      $('#score').remove();
      $('#lives').remove();
      $('#livesTitle').remove();
    });
    tryAgain.x = canvas.width/2 - 100;
    tryAgain.y = canvas.width/2 + 100;
    stage.addChild(text, tryAgain);
    stage.update();
  } else {
    $('#lives').html(newLives.toString());
  }
  createjs.Ticker.setPaused(true);
  let delay = 1000;
  let startTime = createjs.Ticker.getTime();
  while (1) {
    if ( createjs.Ticker.getTime() - startTime > delay){
      break;
    }
  }
  createjs.Ticker.setPaused(false);
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
