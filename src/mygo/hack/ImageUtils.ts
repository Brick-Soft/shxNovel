import { ImageUtils } from 'three';

/**
 * Plugin `hack/ImageUtils` is an official plugin for dummy Three behaviour.
 * This modified the performance during serialization.
 */

const origionMethod = ImageUtils.getDataURL;

ImageUtils.getDataURL = function (image, origion = false) {
    if (origion) return origionMethod(image);

    // hack
    if (image instanceof HTMLImageElement || image instanceof HTMLVideoElement)
        return image.src;

    return origionMethod(image);
};
