
import { Interaction } from 'three.interaction';
import { Box3, Vector3 } from 'three'
import gsap from 'gsap';

import state from './state'
import createBall from "./components/models/createBall.js";

import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createVignette } from "./components/vignette"

import { createPointLights } from "./components/lights/pointLights.js";
import { createAmbientLights } from "./components/lights/ambientLights.js";
import { createDirectionalLights } from "./components/lights/directionalLights.js";
import { createHemisphereLights } from "./components/lights/hemisphereLights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

let camera;
let renderer;
let scene;
let loop;
let interaction;
let background;
class World {
  constructor(container) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer(container);
    background = createVignette(container);
    loop = new Loop(camera, scene, renderer);
    
    interaction = new Interaction(renderer, scene, camera);
    container.append(renderer.domElement);
  
    const pointLight = createPointLights();
    const ambientLight = createAmbientLights();
    const directionalLight = createDirectionalLights();
    const hemisphereLight = createHemisphereLights();

    loop.updatables.push(background);

    camera.add( ambientLight, directionalLight, pointLight );
    scene.add( camera, background, hemisphereLight )
    
    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  async init() {
    const ball = await createBall()
    loop.updatables.push(ball)
    scene.add(ball)

    // POSITION CAMERA
    const box = new Box3().setFromObject(ball);
    const size = box.getSize(new Vector3()).length();
    const center = box.getCenter();

    camera.near = size / 100;
    camera.far = size * 100;
    camera.updateProjectionMatrix();

    camera.position.copy(center);
    camera.position.x += size / 2.0;
    camera.position.y += size / 4.0;
    camera.position.z += size;
    camera.lookAt(center);

    // INTERACTION
    const slice1 = ball.children[0]
    const slice2 = ball.children[1]
    const slice3 = ball.children[2]
    const slice4 = ball.children[3]
    const slice5 = ball.children[4]
    const slice6 = ball.children[5]

    slice1.position.z = -50
    slice3.position.z = 25
    slice3.position.x = -30

    slice1.on('click', function(e) { 
      state.clicks = "Slice1 Click"
      gsap.to(slice1.position, .4, {
        z: -1000,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: 30,
        ease: 'Sine.easeIn',
      })
    });
    
    slice2.on('click', function(e) { 
      state.clicks = "Slice2 Click"
      gsap.to(slice1.position, .4, {
        z: -50,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: size,
        ease: 'Sine.easeIn',
      })
    });

    slice3.on('click', function(e) { 
      state.clicks = "Slice3 Click"
      gsap.to(slice1.position, .4, {
        z: -50,
        ease: 'Sine.easeIn',
      })
      gsap.to(slice3.position, .4, {
        z: -50,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: size / 2,
        x: size / 2,
        ease: 'Sine.easeIn',
      })
    });

    slice4.on('click', function(e) { 
      state.clicks = "Slice3 Click"
      gsap.to(slice1.position, .4, {
        z: 0,
        ease: 'Sine.easeIn',
      })
      gsap.to(slice3.position, .4, {
        z: 0,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: size * 2,
        x: size / 2,
        ease: 'Sine.easeIn',
      })
    });

    slice5.on('click', function(e) { 
      state.clicks = "Slice3 Click"
      gsap.to(slice1.position, .4, {
        z: -100,
        ease: 'Sine.easeIn',
      })
      gsap.to(slice2.position, .4, {
        z: -100,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: size,
        x: size / 2,
        ease: 'Sine.easeIn',
      })
    });

    slice6.on('click', function(e) { 
      state.clicks = "Slice3 Click"
      gsap.to(slice1.position, .4, {
        z: -100,
        ease: 'Sine.easeIn',
      })
      gsap.to(slice3.position, .1, {
        z: 0,
        ease: 'Sine.easeIn',
      })
      gsap.to(slice4.position, .4, {
        z: -100,
        ease: 'Sine.easeIn',
      })
      gsap.to(camera.position, 1, {
        z: size * 3,
        x: size / 2,
        ease: 'Sine.easeIn',
      })
    });

    slice1.on('mouseover', function(e) { state.clicks = "Slice1 Hover" });
    slice2.on('mouseover', function(e) { state.clicks = "Slice2 Hover" });
    slice3.on('mouseover', function(e) { state.clicks = "Slice3 Hover" });
    slice4.on('mouseover', function(e) { state.clicks = "Slice4 Hover" });
    slice5.on('mouseover', function(e) { state.clicks = "Slice5 Hover" });
    slice6.on('mouseover', function(e) { state.clicks = "Slice6 Hover" });

  }
}

export { World }
