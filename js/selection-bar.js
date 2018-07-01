let selectionBarView = document.getElementById("camera-orientation-selection");
let selectionBarFocusOn = document.getElementById("camera-focus-selection");

function selectionBarUpdate() {
  cameraOrientation = selectionBarView.options[selectionBarView.selectedIndex].value;
  cameraTarget = getGameObject3DByName(selectionBarFocusOn.options[selectionBarFocusOn.selectedIndex].value);
  cameraFocusOptionNew = selectionBarFocusOn.options[selectionBarFocusOn.selectedIndex].value;
  if (cameraFocusOptionNew != cameraFocusOptionOld) cameraLerpTimer = 0;
  cameraFocusOptionOld = selectionBarFocusOn.options[selectionBarFocusOn.selectedIndex].value;
}
