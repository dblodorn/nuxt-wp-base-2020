import state from '../../state'
import { DirectionalLight } from "three";

function createDirectionalLights() {
  const light = new DirectionalLight(state.lights.directColor, state.lights.directIntensity);
  light.position.set(1.5, 0, 3.866);
  return light;
}

export { createDirectionalLights };
