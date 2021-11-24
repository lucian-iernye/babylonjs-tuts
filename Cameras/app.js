// canvas element from html
const canvas = document.getElementById("canvas");

// the babylonjs engine - require the canvas element and boolean for antialias
const engine = new BABYLON.Engine(canvas, true);

// the babylon scene
const createScene = () => {
  //scene
  const scene = new BABYLON.Scene(engine);

  scene.clearColor = new BABYLON.Color3.White();

  //creating objects
  const box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
  const box2 = BABYLON.Mesh.CreateBox("Box2", 4.0, scene);
  const material = new BABYLON.StandardMaterial("material1", scene);
  material.wireframe = true;
  box2.material = material;
  box2.position = new BABYLON.Vector3(0, 5, 0);

  //setting up the camera
  //free camera - we can move around the room in 360 degrees
  //   const camera = new BABYLON.FreeCamera(
  //     "camera1", //name as a string
  //     new BABYLON.Vector3(0, 0, -10), //vector 3 is x, y, z axis
  //     scene //the scene
  //   );

  //   arc rotate camera - we can rotate the element itself
  //   const camera = new BABYLON.ArcRotateCamera(
  //     "arcCamera",
  //     BABYLON.Tools.ToRadians(45),
  //     BABYLON.Tools.ToRadians(45),
  //     10.0,
  //     box.position,
  //     scene
  //   );

  // follow camera
  const camera = new BABYLON.FollowCamera(
    "followCamera",
    new BABYLON.Vector3(0, 10, -10),
    scene
  );

  //   camera.target = box;
  camera.radius = 10;
  camera.heightOffset = 5;
  camera.rotationOffset = 0;

  camera.lockedTarget = box;

  camera.attachControl(canvas, true);
  //   camera.keysUp.push(87);

  return scene;
};

const scene = createScene();
engine.runRenderLoop(() => {
  scene.getMeshByName("Box").position.z -= 0.005;
  scene.render();
});
