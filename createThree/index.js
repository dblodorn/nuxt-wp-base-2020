import { World } from "./World"

let world;

const startWorld = async function (container) {
  world = new World(container);
  await world.init();
  world.start();
}

const clearWorld = function () {
  world.stop();
}

const nextHandler = function () {
  world.nextHandler();
}

const prevHandler = function () {
  world.prevHandler();
}

export { startWorld, clearWorld, nextHandler, prevHandler }