import state from '../state'
import { WebGLRenderer, sRGBEncoding } from "three";

function createRenderer(container) {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.setClearColor(0xcccccc);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMappingExposure = state.lights.exposure;
  renderer.setSize(container.clientWidth, container.clientHeight);
  return renderer;
}

export { createRenderer };
