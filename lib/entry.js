import SpaceInvadersGame from './space_invaders_game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage(canvas);
  window.stage = stage;
  window.canvas = canvas;
  new SpaceInvadersGame(stage, canvas);
});
