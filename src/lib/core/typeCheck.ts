import { Texture } from 'three';

export function isObject(x: unknown): x is Record<string, unknown> {
    return x !== null && typeof x === 'object';
}

export function isTexture(x: unknown): x is Texture {
    return !!(isObject(x) && x?.isTexture);
}

export function isFunction(x: unknown): x is Function {
    return typeof x === 'function';
}
