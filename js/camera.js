let camera = new THREE.PerspectiveCamera(45, screenWidth / screenHeight, 1, 100000);
camera.position.set(0, 0, 0);

let cameraTarget;
let cameraOffset;
let cameraOrientation = "side-view";
let cameraLerpSpeed = 0.01;
let cameraLerpTimer = 0;
let cameraFocusOptionNew = null;
let cameraFocusOptionOld = null;

function cameraUpdate() {
  cameraOrientationUpdate(cameraOrientation);
}

function cameraOrientationUpdate(orientation) {
  switch (orientation) {
    case "side-view":
      cameraOffset = cameraTarget.radius * globalScale * 100000;
      camera.rotation.x = Math2.degreesToRadians(0);
      camera.position.x = THREE.Math.lerp(camera.position.x, cameraTarget.positionX, cameraLerpTimer);
      camera.position.y = THREE.Math.lerp(camera.position.y, cameraTarget.positionY, cameraLerpTimer);
      camera.position.z = THREE.Math.lerp(camera.position.z, cameraTarget.positionZ + cameraOffset, cameraLerpTimer);
      break;
    case "top-view":
      cameraOffset = cameraTarget.radius * globalScale * 100000 * 5;
      camera.rotation.x = Math2.degreesToRadians(-90);
      camera.position.x = THREE.Math.lerp(camera.position.x, cameraTarget.positionX, cameraLerpTimer);
      camera.position.y = THREE.Math.lerp(camera.position.y, cameraTarget.positionY + cameraOffset, cameraLerpTimer);
      camera.position.z = THREE.Math.lerp(camera.position.z, cameraTarget.positionZ, cameraLerpTimer);
      break;
  }
  cameraLerpTimer += cameraLerpSpeed;
  cameraLerpTimer = THREE.Math.clamp(cameraLerpTimer, 0, 1);
}
