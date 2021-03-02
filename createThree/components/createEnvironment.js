import {
  UnsignedByteType,
  PMREMGenerator
} from "three";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

async function createEnvironment(renderer) {
  const pmremGenerator = new PMREMGenerator( renderer );
	pmremGenerator.compileEquirectangularShader();
  const loader = new RGBELoader();
  loader.setDataType( UnsignedByteType )
  const map = await loader.load( 'https://media.dmbk.io/fr-models/venice_sunset_1k.hdr', ( texture ) => {
    const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
    pmremGenerator.dispose();
    return envMap;
  });
  return map;
}

export { createEnvironment };