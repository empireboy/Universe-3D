let planet = new Array();
let sun;

function sunInitialize() {
  sun = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  sun.name = "sun";
  sun.setGeometrySphere(1393000 * globalScale, 30, 30);
  sun.setTexture("textures/sun.jpg");
  sun.setMaterialToon(0xeeeeee, sun.texture);
  sun.setMesh(sun.geometry, sun.material);
  scene.add(sun.mesh);

  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(0, 0, 0);
  scene.add(light);
}

function planetsInitialize() {
  planet[0] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[0].name = "mercury";
  planet[0].setGeometrySphere(4878 * globalScale, 10, 10);
  planet[0].setTexture("textures/mercury.jpg");
  planet[0].setMaterialToon(0xeeeeee, planet[0].texture);
  planet[0].setMesh(planet[0].geometry, planet[0].material);
  scene.add(planet[0].mesh);
  planet[0].pos_rel = new Vector2(57.91 * Math.pow(10, 6) * globalScale, 0);
  planet[0].dAngle = 88 * timeScale;

  planet[1] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[1].name = "venus";
  planet[1].setGeometrySphere(12104 * globalScale, 10, 10);
  planet[1].setTexture("textures/venus.jpg");
  planet[1].setMaterialToon(0xeeeeee, planet[1].texture);
  planet[1].setMesh(planet[1].geometry, planet[1].material);
  scene.add(planet[1].mesh);
  planet[1].pos_rel = new Vector2(1.0821 * Math.pow(10, 8) * globalScale, 0);
  planet[1].dAngle = 225 * timeScale;

  planet[2] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[2].name = "earth";
  planet[2].setGeometrySphere(12756 * globalScale, 10, 10);
  planet[2].setTexture("textures/earth.jpg");
  planet[2].setMaterialToon(0xeeeeee, planet[2].texture);
  planet[2].setMesh(planet[2].geometry, planet[2].material);
  scene.add(planet[2].mesh);
  planet[2].pos_rel = new Vector2(149.6 * Math.pow(10, 6) * globalScale, 0);
  planet[2].dAngle = 365 * timeScale;
  planet[2].moon = new Array();
  planet[2].moon[0] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[2].moon[0].name = "moon";
  planet[2].moon[0].setGeometrySphere(3476 * globalScale, 10, 10);
  planet[2].moon[0].setTexture("textures/moon.png");
  planet[2].moon[0].setMaterialToon(0xeeeeee, planet[2].moon[0].texture);
  planet[2].moon[0].setMesh(planet[2].moon[0].geometry, planet[2].moon[0].material);
  scene.add(planet[2].moon[0].mesh);
  planet[2].moon[0].pos_rel = new Vector2(384400 * globalScale, 0);
  planet[2].moon[0].dAngle = 27 * timeScale;

  planet[3] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[3].name = "mars";
  planet[3].setGeometrySphere(6794 * globalScale, 10, 10);
  planet[3].setTexture("textures/mars.jpg");
  planet[3].setMaterialToon(0xeeeeee, planet[3].texture);
  planet[3].setMesh(planet[3].geometry, planet[3].material);
  scene.add(planet[3].mesh);
  planet[3].pos_rel = new Vector2(2.279 * Math.pow(10, 8) * globalScale, 0);
  planet[3].dAngle = 686 * timeScale;

  planet[4] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
  planet[4].name = "jupiter";
  planet[4].setGeometrySphere(142984 * globalScale, 10, 10);
  planet[4].setTexture("textures/jupiter.jpg");
  planet[4].setMaterialToon(0xeeeeee, planet[4].texture);
  planet[4].setMesh(planet[4].geometry, planet[4].material);
  scene.add(planet[4].mesh);
  planet[4].pos_rel = new Vector2(7.7841 * Math.pow(10, 8) * globalScale, 0);
  planet[4].dAngle = 4332 * timeScale;

  /*for (let i = 5; i < 10; i++) {
    planet[i] = new GameObject3D(new Point(0, 0), new Vector2(0, 0), new Vector2(0, 0), new Vector2(0, 0));
    planet[i].setGeometrySphere(50000 * globalScale, 10, 10);
    planet[i].setTexture("textures/sun.jpg");
    planet[i].setMaterialToon(0xeeeeee, planet[i].texture);
    planet[i].setMesh(planet[i].geometry, planet[i].material);
    scene.add(planet[i].mesh);
    planet[i].pos_rel = new Vector2(Random.randomRange(globalScale, 7.7841 * Math.pow(10, 8) * globalScale), 0);
    planet[i].pos_rel.angle = Random.randomRange(0, 360);
    planet[i].dAngle = 0;
  }*/
}

function universeUpdate() {
  sunUpdate();
  planetUpdate();
}

function sunUpdate() {
  sun.setRotation(sun.rotationX, sun.rotationY - timeScale * 10000, sun.rotationZ);
  sun.update();
}

function planetUpdate() {
  // Update planets
  for (let i = 0; i < planet.length; i++) {
    planet[i].pos_rel.angle += planet[i].dAngle;
    planet[i].pos.sumVector(sun.pos, planet[i].pos_rel);
    planet[i].setRotation(planet[i].rotationX, planet[i].rotationY - timeScale * 10000, planet[i].rotationZ);
    planet[i].update();

    // Update moons
    if (planet[i].moon != undefined) {
      for (let j = 0; j < planet[i].moon.length; j++) {
        planet[i].moon[j].pos_rel.angle += planet[i].moon[j].dAngle;
        planet[i].moon[j].pos.sumVector(planet[i].pos, planet[i].moon[j].pos_rel);
        planet[i].moon[j].setRotation(planet[i].moon[j].rotationX, planet[i].moon[j].rotationY - timeScale * 10000, planet[i].moon[j].rotationZ);
        planet[i].moon[j].update();
      }
    }
  }
}
