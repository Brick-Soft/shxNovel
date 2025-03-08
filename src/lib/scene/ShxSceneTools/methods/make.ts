import { Scene } from 'three';
import { ShxScene } from 'types/shx';
import { isObject } from '@/lib/core/typeCheck';
import { TextureCache } from '../../TextureCache';

export function make(): ShxScene {
    const scene = new Scene();

    return wrap(scene);
}

export function wrap(scene: Scene): ShxScene {
    if (!isObject(scene.userData.textureCache)) {
        scene.userData.textureCache = new TextureCache();
    }

    return scene;
}
