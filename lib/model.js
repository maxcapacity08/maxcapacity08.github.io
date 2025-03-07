import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "cat";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;

        // Scale the model down
        obj.scale.set(1.5, 1.5, 1.5);

        // Rotate to face forward
        obj.rotation.y = Math.PI * 1;

        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      (xhr) => {
        const percent = (xhr.loaded / xhr.total) * 100;
        console.log(`Loading model: ${Math.round(percent)}%`);
      },
      (error) => {
        console.error("Error details:", error);
        reject(new Error(`Failed to load model: ${error.message}`));
      }
    );
  });
}
