import state from '../../state'
import { HemisphereLight } from "three";

function createHemisphereLights() {
  const light = new HemisphereLight(
    state.lights.hemisphereSky,
    state.lights.hemisphereGround,
    state.lights.hemisphereIntensity
  );
  return light;
}

export { createHemisphereLights };
