import { Material, Mesh } from 'three';
import { isObject, isTexture } from '@/lib/core/typeCheck';

/** f**k TypeScript */
interface IMesh extends Mesh {
    material: Material & {
        uniforms?: object;
    };
}

/**
 * Dispose self material (also texures in uniforms) and geometry. \
 * Will not dispose children.
 */
export function dispose(item: Mesh, clearTexture = true) {
    if (!item) return;

    if (clearTexture) {
        const some = (<IMesh>item).material?.uniforms;

        if (isObject(some)) {
            for (const key in some) {
                const uniform = some[key];
                if (isObject(uniform) && 'value' in uniform) {
                    const uniformValue = uniform.value;
                    if (isTexture(uniformValue)) {
                        uniformValue.dispose();
                    }
                }
            }
        }
    }

    if (item.material) {
        if (Array.isArray(item.material)) {
            for (const one of item.material) {
                one?.dispose();
            }
        } else {
            item.material?.dispose();
        }
        item.material = null;
    }

    if (item.geometry) {
        item.geometry.dispose();
        item.geometry = null;
    }
}
