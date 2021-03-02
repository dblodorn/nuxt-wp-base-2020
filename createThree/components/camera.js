import { PerspectiveCamera } from "three";

function createCamera(container) {
  const camera = new PerspectiveCamera(
    75,
    container.innerWidth / container.innerHeight,
    0.01,
    1000
  );
  camera.position.z = 5;
  return camera;
}

export { createCamera };
