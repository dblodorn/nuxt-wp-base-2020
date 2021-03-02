import {
  MathUtils,
  Box3,
  Vector3
} from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

function traverseMaterials (object, callback) {
  object.traverse((node) => {
    if (!node.isMesh) return;
    const materials = Array.isArray(node.material)
      ? node.material
      : [node.material];
    materials.forEach(callback);
  });
}

async function loadModels(modelAsset, rotateSpeed, position, rotation) {
  const loader = new GLTFLoader();
  loader.crossOrigin = true;
  const modelData = await loader.loadAsync(modelAsset);

  const model = setupModel(modelData).scene;
  
  const box = new Box3().setFromObject(model);
  const size = box.getSize(new Vector3()).length();
  const center = box.getCenter(new Vector3());

  model.position.x += size / 2;
  model.position.y += size / 2;
  model.position.z += size / 2;


  const radiansPerSecond = MathUtils.degToRad(30);
  const speed = rotateSpeed || .001
  /*
  model.tick = () => {
    model.rotation.z += radiansPerSecond * speed;
    model.rotation.x += radiansPerSecond * speed;
    model.rotation.y += radiansPerSecond * speed;
  };
  */
  /*
  model.traverse((node) => {
    if (node.isLight) {
      console.log('light')
    } else if (node.isMesh) {
      console.log('mesh')
    }
  });
  */
  return { 
    model,
    size,
    center
  };
}

export { loadModels };
