import { ImageUtils } from 'three';

const origionMethod = ImageUtils.getDataURL;

ImageUtils.getDataURL = function (image, origion = false) {
    if (origion) return origionMethod(image);

    return image.src;
};
