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

  // creating cameras
  const camera = new BABYLON.ArcRotateCamera(
    "arcCamera",
    BABYLON.Tools.ToRadians(45),
    BABYLON.Tools.ToRadians(45),
    10.0,
    box.position,
    scene
  );
  camera.attachControl(canvas, true);

  // creating lights
  // const light = new BABYLON.PointLight(
  //   "pointLight",
  //   new BABYLON.Vector3(0, 10, 0),
  //   scene
  // );
  // apply a diffuse color on the light
  // light.diffuse = new BABYLON.Color3(1, 0, 0);
  // spotlight
  const light = new BABYLON.SpotLight(
    "spotLight",
    new BABYLON.Vector3(0, 10, 0),
    new BABYLON.Vector3(0, -1, 0),
    BABYLON.Tools.ToRadians(45),
    0.1,
    scene
  );

  // scene.actionManager = new BABYLON.ActionManager(scene);
  // scene.actionManager.registerAction(
  //   new BABYLON.ExecuteCodeAction(
  //     {
  //       trigger: BABYLON.ActionManager.OnKeyUpTrigger,
  //       parameter: " ",
  //     },
  //     () => {
  //       light.setEnabled(!light.isEnabled());
  //     }
  //   )
  // );

  return scene;
};

const scene = createScene();
engine.runRenderLoop(() => {
  //modify light
  // const light = scene.getLightByName("pointLight");
  // light.diffuse.g += 0.01;
  // light.diffuse.b += 0.01;
  const light = scene.getLightByName("spotLight");
  light.position.y -= 0.01;
  scene.render();
});
