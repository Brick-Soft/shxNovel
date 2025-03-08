import { ShxObject } from 'types/shx';
import { isTexture } from '@/lib/core/typeCheck';

/**
 * Dispose self material (also texures in uniforms) and geometry. \
 * Will not dispose children.
 */
export function dispose(item: ShxObject, clearTexture = true) {
    if (clearTexture) {
        for (const key in item.material.uniforms) {
            const uniform = item.material.uniforms[key]?.value;
            if (isTexture(uniform)) {
                uniform.dispose();
                item.material.uniforms[key].value = null;
            }
        }
    }

    item.material.dispose();
    item.material = null;

    item.geometry.dispose();
    item.geometry = null;
}
