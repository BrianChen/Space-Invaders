## Space Invaders

### Background

Space Invaders is a Japanese shooting video game released in 1978 by Taito. It became a huge success after it's release and has had many updates and remake since then.  In the game of Space Invaders, you control a ship which can move left and right.  There are aliens on top of the screen that moves down at you at a certain speed.  The goal is to shoot them down before they reach you.

### Functionality & MVP  

In this Space Invaders game, players can:

- [ ] Start and pause the game
- [ ] Toggle the music on and off
- [ ] Play through multiple levels with increased difficulty

The game will also contain:

- [ ] A start menu where the player can press play to start.
- [ ] Introduction and instruction on the start menu.

### Wireframes

This game will have a start menu where players will be able to view instructions and start the game play pressing "play".  Once the game has started, the space ship will be controlled using arrow keys and it will be able to fire using the spacebar.  There will also be a button to pause (or hit enter). Lives and score will be on the top left and right hand corners, respectively.

![wireframes](https://raw.github.com/BrianChen/Space-Invaders/master/game.png) 
![wireframes](https://raw.github.com/BrianChen/Space-Invaders/master/start-menu.png)  


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Processing.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`ship.js`: this script will be used to handle draw the space ship and the draw the animation when it gets hit.  It will also contain the movement logic of the ship as well as keeping track of it's coordinates on the canvas.

`game.js`: this script will keep track of the game state such as lives and score.  It will end the game when the player runs out of lives and display a game over.

'alien.js': this script will be used to handle the amount of the aliens and the speed they travel at.  


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Processing.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Processing.js`.  Goals for the day:

- Get ships and aliens to render on the canvas.
- Learn more about Processing.js

**Day 2**: Implement user interaction by key presses.  Allow users to move spaceship and move around at a certain speed.  Also create bullets that fire from the coordinate of the spaceship.  Goals for the day:

- Implement user interaction (move spaceship and fire)
- Implement bullets that fire from spaceship and it's effect when hitting an alien.

**Day 3**: Implement a scoring system and a way to keep track of lives.  Work on a general game logic from start to finish.  Add in levels that would increase in difficulty (i.e movement of aliens and rows of aliens). Goals for the day:

- Finish the 'game.js' script and implement the game logic.
- Implement difficulty levels.


**Day 4**: Create the start menu and instructions.  Style the page to make sure it has nice graphics.  Add in music and pause/start controls. Goals for the day:

- Add start menu with instructions
- Add music and pause/start


### Bonus features

- [ ] Add different version of aliens that have different points
- [ ] Add ship upgrades
- [ ] Add more lives once you reach a certain score.
