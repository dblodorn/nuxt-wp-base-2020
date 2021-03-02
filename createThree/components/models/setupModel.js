function setupModel(gltf) {
  const scene = gltf.scene || gltf.scenes[0];
  const clips = gltf.animations || [];
  
  if (!scene) {
    // Valid, but not supported by this viewer.
    throw new Error(
      'This model contains no scene, and cannot be viewed here. However,'
      + ' it may contain individual 3D resources.'
    );
  }
  
  return {
    scene,
    clips
  };
}

export { setupModel };
