import {
  MathUtils,
  Box3,
  Vector3
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

async function loadModels(modelAsset) {
  const loader = new GLTFLoader();
  loader.crossOrigin = true;
  const modelData = await loader.loadAsync(modelAsset);

  const model = setupModel(modelData).scene;
  
  const box = new Box3().setFromObject(model);
  const size = box.getSize(new Vector3()).length();
  const center = box.getCenter(new Vector3());

  model.position.x += (size / 2);
  model.position.y += (size / 2);
  model.position.z += (size / 2);

  return model;
}

export { loadModels };
