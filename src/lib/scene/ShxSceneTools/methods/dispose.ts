import { isTexture } from '@/lib/core/typeCheck';
import { ShxScene } from 'types/shx';

/**
 * Dispose self textureCache. \
 * Will not dispose children.
 */
export function dispose(scene: ShxScene) {
    if (scene.userData.textureCache) {
        scene.userData.textureCache.clear();
        scene.userData.textureCache = null;
    }

    if (isTexture(scene.background)) {
        scene.background.dispose();
        scene.background = null;
    }

    if (isTexture(scene.environment)) {
        scene.environment.dispose();
        scene.environment = null;
    }
}
