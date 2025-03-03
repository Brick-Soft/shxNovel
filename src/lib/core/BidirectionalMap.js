/**
 * A Map records <string, object>.
 * Supports reverse lookup.
 */
export class BidirectionalMap {
    constructor() {
        /** @type {Map<string, object>} */
        this.keyToObj = new Map();

        /** @type {WeakMap<object, string>} */
        this.objToKey = new WeakMap();
    }

    /**
     * @param {string} key
     * @param {object} value
     */
    set(key, value) {
        if (typeof key !== 'string') {
            throw new TypeError('Key must be a string');
        }

        if (typeof value !== 'object' || value === null) {
            throw new TypeError('Value must be a non-null object');
        }
        this.forceSet(key, value);
    }

    /**
     * @param {string} key
     * @param {object} value
     */
    forceSet(key, value) {
        this.__clean(key, value);
        this.__set(key, value);
    }

    __clean(newKey, newValue) {
        const oldValue = this.keyToObj.get(newKey);
        if (oldValue) this.objToKey.delete(oldValue);

        const oldKey = this.objToKey.get(newValue);
        if (oldKey) this.keyToObj.delete(oldKey);
    }

    __set(key, value) {
        this.keyToObj.set(key, value);
        this.objToKey.set(value, key);
    }

    /** @param {string} key  */
    getByKey(key) {
        return this.keyToObj.get(key);
    }

    /** @param {object} value  */
    getKeyByValue(value) {
        return this.objToKey.get(value);
    }

    /** @param {string} key  */
    deleteByKey(key) {
        const value = this.keyToObj.get(key);
        if (value) {
            this.keyToObj.delete(key);
            this.objToKey.delete(value);
            return true;
        }
        return false;
    }

    /** @param {object} value  */
    deleteByValue(value) {
        const key = this.objToKey.get(value);
        if (key) {
            this.objToKey.delete(value);
            this.keyToObj.delete(key);
            return true;
        }
        return false;
    }

    entries() {
        return Array.from(this.keyToObj.entries());
    }

    get size() {
        return this.keyToObj.size;
    }
}
