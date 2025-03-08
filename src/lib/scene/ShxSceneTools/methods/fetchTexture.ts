import { ShxScene } from 'types/shx';
import { isTexture } from '@/lib/core/typeCheck';
import { Texture } from 'three';

export function fetchTexture(item: ShxScene, result: Texture[] = []) {
    if (isTexture(item.background)) {
        result.push(item.background);
    }

    if (isTexture(item.environment)) {
        result.push(item.environment);
    }

    return result;
}
