import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial
} from "three";

export default function ({x, y, z, color, name, speed}) {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: color || "purple" });
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);


  const rotateSpeed = speed || 0.01;

  if (name) {
    cube.name = name
  }

  cube.position.set(x || 0, y || 0, z || 0);
  cube.rotation.set(0, 0, 0);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * rotateSpeed;
    cube.rotation.x += radiansPerSecond * rotateSpeed;
    cube.rotation.y += radiansPerSecond * rotateSpeed;
  };

  return cube;
}
