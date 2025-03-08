import { isTexture } from '@/lib/core/typeCheck';
import { ShxScene } from 'types/shx';

/**
 * Dispose self textureCache. \
 * Will not dispose children.
 */
export function dispose(item: ShxScene) {
    if (item.userData.textureCache) {
        item.userData.textureCache.clear();
        item.userData.textureCache = null;
    }

    if (isTexture(item.background)) {
        item.background.dispose();
        item.background = null;
    }

    if (isTexture(item.environment)) {
        item.environment.dispose();
        item.environment = null;
    }
}
