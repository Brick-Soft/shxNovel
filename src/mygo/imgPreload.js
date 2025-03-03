import { textureCache } from '../lib/nuiScene.js';

/** @type {string[]} */
const needToPreload = ['/background/default.png', '/background/img1.png', '/background/img2.jpg'];

/** @type {Promise<Texture>[]} */
const promises = [];

for (const src of needToPreload) {
    promises.push(textureCache.load(src));
    // Do not use await to block
    // await textureCache.loadAsync(element);
}

/** @param {string} src */
export function imgToPreload(src) {
    needToPreload.push(src);
}

/**
 * @return {Promise<Texture>[]}
 */
export function waitImgPreloaded() {
    return Promise.all(promises);
}
