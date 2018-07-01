let renderer = new THREE.WebGLRenderer();

renderer.setSize(screenWidth, screenHeight);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

function renderUpdate() {
  renderer.render(scene, camera);
}
