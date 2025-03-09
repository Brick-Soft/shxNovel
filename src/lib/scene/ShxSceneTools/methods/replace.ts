import { Scene } from 'three';
import { ShxScene } from 'types/shx';
import { shxDisposer } from '../../ShxVisitor/ShxDisposer';
import { textureFetcher } from '../../ShxVisitor/TextureFetcher';

export function replace(oldScene: ShxScene, newScene: Scene) {
    const oldTextures = textureFetcher.fetchTexture(oldScene);

    shxDisposer.dispose(oldScene);

    const newTextures = textureFetcher.fetchTexture(newScene);

    shxDisposer;
}
