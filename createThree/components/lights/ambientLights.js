import state from '../../state'
import { AmbientLight } from "three";

function createAmbientLights() {
  const light = new AmbientLight(state.lights.ambientColor, state.lights.ambientIntensity);
  light.position.set(30, 10, 30);
  return light;
}

export { createAmbientLights };
