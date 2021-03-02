import {
  MathUtils,
  Object3D,
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

  const ball = new Object3D();

  ball.add(slice1)
  ball.add(slice2)
  ball.add(slice3)
  ball.add(slice4)
  ball.add(slice5)
  ball.add(slice6)

  const box = new Box3().setFromObject(ball);
  const size = box.getSize(new Vector3()).length();
  
  ball.translateZ(0)
  ball.translateY((size / 4) * -1)

  const radiansPerSecond = MathUtils.degToRad(30);
  const speed = .003

  ball.tick = () => {
    ball.rotateX(radiansPerSecond * speed);
    ball.rotateY(radiansPerSecond * speed);
    ball.rotateZ(radiansPerSecond * speed);
  };

  return ball;
}
