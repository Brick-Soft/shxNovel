import { ShxObject } from '../../../../types/shx';
import { isTexture } from '../../core/typeCheck';

/**
 * Dispose self material(also texures in uniforms) and geometry. \
 * Will not dispose children.
 */
export function disposeShxObject(item: ShxObject, clearTexture = true) {
    if (clearTexture) {
        for (const key in item.material.uniforms) {
            const uniform = item.material.uniforms[key]?.value;
            if (isTexture(uniform)) uniform.dispose();
        }
    }
    item.material.dispose();
    item.geometry.dispose();
}
