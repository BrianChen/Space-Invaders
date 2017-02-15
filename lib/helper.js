const incrementScore = () => {
  let score = $('#score').html();
  let newScore = parseInt(score) + 100;
  $('#score').html(newScore.toString());
}

const nextLevel = (stage, spaceship, alien) => {
  spaceship.removeAllBullets();
  alien.removeAllAlienBullets();
  spaceship.resetPosition();
  let newLevel = parseInt($('#level').html()) + 1;
  $('#level').html(newLevel.toString());
  delayTicker(1000);
  alien.moveRate += 3;
  alien.draw();
}

const updateLives = (stage) => {
  let lives = $('#lives').html();
  let newLives = parseInt(lives) - 1;
  if (newLives === 0) {
    $('#lives').html(newLives.toString());
    stage.removeAllChildren();
    createjs.Ticker.paused = true;
    let text = new createjs.Text("Game Over", "100px Arial", "#ff7700");
    text.x = canvas.width/2 - 260;
    text.y = canvas.height/2 - 100;
    let tryAgain = new createjs.Text("try again!", "50px Arial", "white");
    tryAgain.cursor = "pointer";
    tryAgain.addEventListener("mouseover", () => {
      tryAgain.color = "yellow";
    });
    tryAgain.addEventListener("mouseout", () => {
      tryAgain.color = "white";
    });
    tryAgain.addEventListener("click", () => {
      $('#canvas').hide(),
      $('.welcome-screen').show();
      $('#scoreTitle').remove();
      $('#score').remove();
      $('#lives').remove();
      $('#livesTitle').remove();
      $('#levelTitle').remove();
      $('#level').remove();
    });
    tryAgain.x = canvas.width/2 - 100;
    tryAgain.y = canvas.width/2;
    stage.addChild(text, tryAgain);
  } else {
    $('#lives').html(newLives.toString());
  }
  createjs.Ticker.setPaused(true);
  delayTicker(1000);
}

const delayTicker = (delay) => {
  let startTime = createjs.Ticker.getTime();
  while(1) {
    if ( createjs.Ticker.getTime() - startTime > delay) {
      break;
    }
  }
  createjs.Ticker.setPaused(false);
}

const collisionTest = (alien, bullet) => {
  let alienX1 = alien.localToGlobal(0,0).x;
  let alienX2 = alien.localToGlobal(0,0).x + alien.image.width*2;
  let alienY1 = alien.localToGlobal(0,0).y;
  let alienY2 = alien.localToGlobal(0,0).y + alien.image.height*2;

  let bulletX1 = bullet.x;
  let bulletX2 = bullet.x + bullet.image.width*2;
  let bulletY1 = bullet.y;
  let bulletY2 = bullet.y + bullet.image.height*2;

  if (((bulletX1 >= alienX1 && bulletX1 <= alienX2) || (bulletX2 >= alienX1 && bulletX2 <= alienX2)) &&
    ((bulletY1 <= alienY2 && bulletY1 >= alienY1) || (bulletY2 <= alienY2 && bulletY2 >= alienY1))) {
      return true;
  } else {
    return false;
  }
}

export { incrementScore, nextLevel, updateLives, collisionTest};
