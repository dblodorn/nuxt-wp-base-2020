import state from '../state'
import { createBackground } from "../lib/three-vignette.js";

function createVignette (container) {
  const background = createBackground();
  
  background.tick = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    background.style({
      aspect: width / height,
      aspectCorrection: true,
      scale: 3.5,
      offset: [-0.12, 0.025],
      colors: [state.lights.bgColor1, state.lights.bgColor2],
      grainScale: 2.5 / Math.min(width, height)
    })
  };

  return background;
}

export { createVignette }
