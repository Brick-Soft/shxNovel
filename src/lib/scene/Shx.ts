export * from './shxObject/disposeShxObject';
export * from './shxObject/makeShxAnime';
export * from './shxObject/makeShxObject';
export * from './shxObject/setShxShader';
export * from './shxObject/ShxAnimeTool';

import { disposeShxObject } from './shxObject/disposeShxObject';
import { makeShxObject } from './shxObject/makeShxObject';

export const ShxCollections = {
    shxObject: {
        make: makeShxObject,
        dispose: disposeShxObject,
    },
};

Object.freeze(ShxCollections);
