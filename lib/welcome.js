const Welcome = (stage) => {
  const welcomeText = new createjs.Text("Welcome", "20px Arial", "#ff7700");
  welcomeText.textBaseline = "top";
  welcomeText.x = canvas.width/2 - 50;
  welcomeText.y = canvas.width/2 - 20;

  const playButton = new createjs.Text("Play", "20px Arial", "green");
  playButton.x = canvas.width/2 - 40;
  playButton.y = canvas.width/2 + 20;
}
