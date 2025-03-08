export * as ShxObjectTools from './ShxObjectTools/ShxObjectTools';
export * as ShxSceneTools from './ShxSceneTools/ShxSceneTools';

export * from './ShxVisitor/ShxDisposer';

/**
 *
 */

import * as ShxObjectTools from './ShxObjectTools/ShxObjectTools';
import * as ShxSceneTools from './ShxSceneTools/ShxSceneTools';

export const ShxCollections = {
    shxObject: {
        make: ShxObjectTools.make,
        dispose: ShxObjectTools.dispose,
        fetchTexture: ShxObjectTools.fetchTexture,
    },
    shxScene: {
        make: ShxSceneTools.make,
        dispatchEvent: ShxSceneTools.dispose,
        fetchTexture: ShxSceneTools.fetchTexture,
    },
};

Object.freeze(ShxCollections);
