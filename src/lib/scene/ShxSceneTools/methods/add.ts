import { Object3D } from 'three';
import { ShxScene } from 'types/shx';
import { wrap } from './make';

import { TextureCache } from '../../TextureCache';
import { textureFetcher } from '../../ShxVisitor/TextureFetcher';

export function add(scene: ShxScene, aim: Object3D) {
    wrap(scene);

    const textureCache = aim.parent.userData?.textureCache;
    if (textureCache instanceof TextureCache) {
        const result = textureFetcher.fetchTexture(aim);
        result
    }

    scene.add(aim);
}
