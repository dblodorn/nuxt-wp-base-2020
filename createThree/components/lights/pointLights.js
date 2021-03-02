import { PointLight } from "three";

function createPointLights() {
  const light = new PointLight(0xffffcc, 20, 200);
  light.position.set(4, 30, 220);
  return light;
}

export { createPointLights };
