const Background = (stage) => {
  const img = new Image();
  img.src = "assets/starsbackground.jpg";
  img.onload = function() {
    const bitmap = new createjs.Bitmap(img);
    bitmap.x = 0;
    bitmap.y = 0;
    bitmap.name = "background";
    stage.addChild(bitmap);
    stage.update();
  }
}

export default Background;
