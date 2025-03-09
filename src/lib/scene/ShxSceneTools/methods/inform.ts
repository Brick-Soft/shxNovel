import { Texture } from 'three';
import { ShxScene } from 'types/shx';
import { wrap } from './make';

export function inform(scene: ShxScene, items: Texture[]) {
    wrap(scene);

    for (const texture of items) {
        scene.userData.textureCache.set(texture.uuid, texture);
    }
}

export function uninform(scene: ShxScene, items: Texture[]) {
    wrap(scene);

    for (const texture of items) {
        scene.userData.textureCache.deleteByKey(texture.uuid);
    }
}
