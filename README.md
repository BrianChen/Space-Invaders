# Space Invaders

[Space Invaders Live](https://brianchen.github.io/Space-Invaders/)

## Background

Space Invaders is a Japanese shooting video game released in 1978 by Taito. It became a huge success after it's release and has had many updates and remake since then.  In the game of Space Invaders, you control a ship which can move left and right.  There are aliens on top of the screen that moves down at you at a certain speed.  The goal is to shoot them down before they reach you.

## Functionality & Implementation  

### Modern rich graphics

This version of Space Invaders features rich graphics instead of the traditional old school bit images.  This provides a more modern feel that attracts players.  These graphics were rendered on the canvas using Bitmap from EaselJS which allows manipulation such as scaling and changing coordinates.

### Increasingly hard Levels

The current level is displayed on top of the canvas.  With each level the aliens start moving faster and shooting more bullets.  The difficulty is increased at a considerable rate and gives players a good challenge.

### Sound

SoundJS was used to implement sound effects to the game such as spaceship shooting and aliens being shot down.  It preloads the sound on the start of the game and plays when each event happens.

There is also an option to mute the sound as well.  The button is located on the top right corner.

### Pixel perfect collision detection

Planed and implemented an exact collision detection by taking all object's dimensions and movement speed at every direction. In order to achieve this, the ratio between movement speed vs dimension(length and width) could not be large or the bullet may miss the alien completely during 1 tick cycle.

### Future Features

- [ ] Add different version of aliens that have different points
- [ ] Add ship upgrades
- [ ] Add more lives once you reach a certain score.
