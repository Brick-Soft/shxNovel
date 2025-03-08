import { Texture, WebGLRenderer } from 'three';
import { isObject, isTexture } from '../core/typeCheck';
import { BidirectionalMap } from '../core';
import { texture } from 'three/tsl';

/**
 * TextureCache is for cache (not for reuse ...) \
 * Once one scene change, you can clear relevant Texture usage.
 */
export class TextureCache extends BidirectionalMap<Texture> {
    renderers: WeakSet<WebGLRenderer>;

    constructor(renderers: WebGLRenderer | WebGLRenderer[] = undefined) {
        super();
    }

    initTexture(renderer: WebGLRenderer, texture: Texture = undefined) {
        if (isTexture(texture)) {
        }
    }

    bindRenderer(value: WebGLRenderer) {
        this.renderers.add(value);
    }

    /**
     * Dispose all texture, then clear the container.
     */
    clear() {
        super.forEach((texture) => {
            texture.dispose();
        });
        super.clear();
    }
}
