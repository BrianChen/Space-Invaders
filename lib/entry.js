import SpaceInvadersGame from './space_invaders_game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage(canvas);
  new SpaceInvadersGame(stage, canvas);
});
