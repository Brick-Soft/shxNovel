import * as THREE from 'three';
import { shxOptions } from '../../../config/shxOptions';
import { ShxObject } from './shx';

export function makeShxObject(texture: THREE.Texture): ShxObject {
    const material = new THREE.ShaderMaterial({
        extensions: {
            // @ts-expect-error: they remove this ......
            derivatives: '#extension GL_OES_standard_derivatives : enable',
        },
        uniforms: {
            progress: { value: 0 },
            texture1: { value: texture },
            texture2: { value: texture },
            resolution: {
                value: new THREE.Vector4(
                    texture.image.height,
                    texture.image.width,
                    1,
                    1
                ),
            },
            ...structuredClone(shxOptions.material.uniforms),
        },

        vertexShader: shxOptions.material.vertexShader[1],
        fragmentShader: shxOptions.material.fragmentShader[1],

        userData: {
            vertexShader: shxOptions.material.vertexShader[0],
            fragmentShader: shxOptions.material.fragmentShader[0],

            runningID: 0,
            timeline: undefined,
        },
    });

    const geometry = new THREE.PlaneGeometry(
        texture.image.width,
        texture.image.height,
        1,
        1
    );

    const mesh = new THREE.Mesh(geometry, material);

    // @ts-expect-error: all-fine
    return mesh;
}
