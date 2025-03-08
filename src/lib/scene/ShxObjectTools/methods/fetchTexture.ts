import { ShxObject } from 'types/shx';
import { isTexture } from '@/lib/core/typeCheck';
import { Texture } from 'three';

export function fetchTexture(item: ShxObject, result: Texture[] = []) {
    for (const key in item.material.uniforms) {
        const uniform = item.material.uniforms[key]?.value;
        if (isTexture(uniform)) {
            result.push(uniform);
        }
    }
    return result;
}
