import { isObject } from '@/lib/core/typeCheck';
import { ShxCollections } from '../Shx';
import { Texture } from 'three';

export class TextureFetcher {
    /** check valid */
    fetchTexture(item: unknown, result: Texture[] = []) {
        if (!isObject(item)) return;

        /** solve child */
        if (Array.isArray(item.children)) {
            for (const child of item.children) {
                this.fetchTexture(child, result);
            }
        }

        /** solve self */

        // if shx specialized
        if (
            isObject(item.userData) &&
            typeof item.userData.type === 'string' &&
            item.userData.type in ShxCollections
        ) {
            ShxCollections[item.userData.type]?.fetchTexture(item, result);
            return;
        }

        /**
         * else if THREE item
         * @todo
         */
        const type = item.type;

        if (typeof type !== 'string') return result;

        switch (type) {
            case 'Mesh':
                break;

            default:
                break;
        }

        return result;
    }
}

export const textureFetcher = new TextureFetcher();
