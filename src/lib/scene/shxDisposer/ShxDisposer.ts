import { isFunction, isObject } from '@lib/core/typeCheck';
import { ShxCollections } from '../Shx';

/**
 * @todo
 */
export class ShxDisposer {
    dispose(item: unknown) {
        /** check valid */
        if (!isObject(item)) return;

        /** solve child */
        if (Array.isArray(item.children)) {
            for (const child of item.children) {
                this.dispose(child);
            }

            // clear child Ref
            if (isFunction(item.clear)) {
                item.clear();
            }
        }

        /** solve self */

        // if shx specialized
        if (
            isObject(item.userData) &&
            typeof item.userData.type === 'string' &&
            item.userData.type in ShxCollections
        ) {
            ShxCollections[item.userData.type].dispose(item);
            return; 
        }

        /**
         * else if THREE item
         * @todo
         */
    }
}

export const shxDisposer = new ShxDisposer();
