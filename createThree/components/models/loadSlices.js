import {
  MathUtils,
  Box3,
  Vector3
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel.js";

export default async function () {
  const loader = new GLTFLoader();
  loader.crossOrigin = true;
  
  const [slice1Data, slice2Data, slice3Data, slice4Data, slice5Data, slice6Data] = await Promise.all([
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice1_r2b.gltf'),
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice2_r2b.gltf'),
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice3_r2b.gltf'),
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice4_r2b.gltf'),
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice5_r2b.gltf'),
    loader.loadAsync('https://media.dmbk.io/fr-models/fr-slices/Felicitas_Slice6_r2b.gltf'),
  ])
  
  const slice1 = setupModel(slice1Data).scene;
  const slice2 = setupModel(slice2Data).scene;
  const slice3 = setupModel(slice3Data).scene;
  const slice4 = setupModel(slice4Data).scene;
  const slice5 = setupModel(slice5Data).scene;
  const slice6 = setupModel(slice6Data).scene;

  return {
    slice1,
    slice2,
    slice3,
    slice4,
    slice5,
    slice6
  };
}
