import SpaceInvaders from './space_invaders';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const stage = new createjs.Stage('canvas');
  const spaceInvaders = new SpaceInvaders(stage, canvas);
});
