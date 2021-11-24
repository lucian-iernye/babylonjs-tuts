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
  box.position = new BABYLON.Vector3(0, 5, 0);

  //setting up the camera
  //free camera - we can move around the room in 360 degrees
  const camera = new BABYLON.FreeCamera(
    "camera1", //name as a string
    new BABYLON.Vector3(0, 5, -15), //vector 3 is x, y, z axis
    scene //the scene
  );

  camera.attachControl(canvas, true);

  return scene;
};

const scene = createScene();
engine.runRenderLoop(() => {
  scene.render();
});
