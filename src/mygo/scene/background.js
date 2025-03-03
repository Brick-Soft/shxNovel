import * as THREE from 'three';

import { scene, camera, renderer, textureCache } from '../../lib/nuiScene.js';
import { ShxObject } from '../../lib/nuiScene/ShxObject.js';

import { waitImgPreloaded } from '../imgPreload.js';
// import { GLTFExporter, GLTFLoader, GLTFParser } from 'three/examples/jsm/Addons.js';

waitImgPreloaded().then((textures) => {
    for (const texture of textures) {
        renderer.initTexture(texture);
    }
});

const __textute = await textureCache.load('/background/default.png');
const background = new ShxObject(__textute);
scene.add('background', background); // remind this, lol

window.background = background;
window.scene = scene;
window.textureCache = textureCache;

const loader = new THREE.ObjectLoader();
window.loader = loader;

// const exporter = new GLTFExporter();
// window.exporter = exporter;

// const loader = new GLTFLoader()
// window.loader = loader;
