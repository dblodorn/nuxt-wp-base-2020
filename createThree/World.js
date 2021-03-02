
import { InteractionManager } from "three.interactive";
import { Box3, Vector3 } from 'three'
import gsap from 'gsap';

import state from './state'
import createBall from "./components/models/createBall";
import createCube from "./components/createCube"

import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createVignette } from "./components/vignette"

import { createPointLights } from "./components/lights/pointLights";
import { createAmbientLights } from "./components/lights/ambientLights";
import { createDirectionalLights } from "./components/lights/directionalLights";
import { createHemisphereLights } from "./components/lights/hemisphereLights";

import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";

let camera;
let renderer;
let scene;
let loop;
let background;
let interactionManager;
let motionHandler;
let cubes;

class World {
  
  constructor(container) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer(container);
    background = createVignette(container);
    loop = new Loop(camera, scene, renderer);
    interactionManager = new InteractionManager(
      renderer,
      camera,
      renderer.domElement
    );

    this.cameraHandler = this.cameraHandler.bind(this);
    this.motionHandler = this.motionHandler.bind(this);

    container.append(renderer.domElement);
  
    const pointLight = createPointLights();
    const ambientLight = createAmbientLights();
    const directionalLight = createDirectionalLights();
    const hemisphereLight = createHemisphereLights();

    loop.updatables.push(background);

    camera.add( ambientLight, directionalLight, pointLight );

    // CUBES
    cubes = {
      cube1: createCube({x: 0, y: 10, z: 10.01, color: 'blue', speed: 0.01, name: 'Scene 1'}),
      cube2: createCube({x: 6, y: -30, z: -6, color: 'purple', speed: 0.005, name: 'Scene 2'}),
      cube3: createCube({x: 32, y: -40, z: 3, color: 'yellow', speed: 0.02, name: 'Scene 3'}),
      cube4: createCube({x: 48, y: 5, z: 1, color: 'green', speed: 0.015, name: 'Scene 4'}),
      cube5: createCube({x: 64, y: 2, z: -2, color: 'red', speed: 0.009, name: 'Scene 5'}),
      cube6: createCube({x: 80, y: 0, z: 0.01, color: 'orange', speed: 0.003, name: 'Scene 6'}),
    }

    loop.updatables.push(cubes.cube1)
    loop.updatables.push(cubes.cube2)
    loop.updatables.push(cubes.cube3)
    loop.updatables.push(cubes.cube4)
    loop.updatables.push(cubes.cube5)
    loop.updatables.push(cubes.cube6)
    
    for (const [name, object] of Object.entries(cubes)) {
      object.addEventListener("click", (event) => {
        event.stopPropagation();
        alert(`${object.name} was clicked`);
      });
      interactionManager.add(object);
      scene.add(object);
    }
    
    scene.add(camera, hemisphereLight, background)

    setTimeout(() => {
      this.motionHandler(cubes.cube1, 5)
    }, 2000)

    const resizer = new Resizer(container, camera, renderer);
  }

  motionHandler (object, speed) {
    console.log(object)
    state.clicks = object.name
    gsap.to(camera.position, speed || 2, {
      x: object.position.x,
      y: object.position.y,
      z: 5 + object.position.z,
      ease: 'expo.out',
    })
  }

  cameraHandler() {
    if (state.currentSlide === 1) {
      this.motionHandler(cubes.cube1, 7)
    } else if (state.currentSlide === 2) {
      this.motionHandler(cubes.cube2, 6)
    } else if (state.currentSlide === 3) {
      this.motionHandler(cubes.cube3, 4)
    } else if (state.currentSlide === 4) {
      this.motionHandler(cubes.cube4, 5)
    } else if (state.currentSlide === 5) {
      this.motionHandler(cubes.cube5)
    } else if (state.currentSlide === 6) {
      this.motionHandler(cubes.cube6)
    }
  }

  nextHandler() {
    state.clicks = state.clicks + 1
    if (state.currentSlide < state.slideCount) {
      state.currentSlide = state.currentSlide + 1
      this.cameraHandler()
    }
  }

  prevHandler() {
    state.clicks = state.clicks + 1
    if (state.currentSlide > 1) {
      state.currentSlide = state.currentSlide - 1
      this.cameraHandler()
    }
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    console.log('stop');
    loop.stop();
    renderer.dispose();
  }

  async init() {}
}

export { World }
