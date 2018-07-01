function gameLoop() {
  requestAnimationFrame(gameLoop);

  selectionBarUpdate();

  renderUpdate();

  universeUpdate();

  cameraUpdate();
}
