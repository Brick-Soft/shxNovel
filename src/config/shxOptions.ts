import * as THREE from 'three';
import { fragments } from './fragments';
import { vertexs } from './vertexs';

/** Default Warpped Mesh Options */
export const shxOptions = {
    material: {
        vertexShader: ['default', vertexs.default],
        fragmentShader: ['default', fragments.default],

        uniforms: {
            swipe: { value: 0 },
            width: { value: 0 },
            radius: { value: 0 },
            border: { value: 0 },
            scaleX: { value: 0 },
            scaleY: { value: 0 },
            intensity: { value: 0 },
            transition: { value: 0 },
        },
    },

    geometry: {},

    mesh: {
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, 0, 0, 'XYZ'),
        visible: true,
    },
};
