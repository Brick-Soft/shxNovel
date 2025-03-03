export function createDeepProxy(target, handler) {
    const proxyCache = new WeakMap();

    function getProxy(obj) {
        if (typeof obj === 'object' && obj !== null) {
            if (proxyCache.has(obj)) {
                return proxyCache.get(obj);
            }
            const proxy = new Proxy(obj, {
                get(target, prop, receiver) {
                    const value = Reflect.get(target, prop, receiver);
                    return getProxy(value);
                },
                set(target, prop, value, receiver) {
                    if (handler.set) {
                        handler.set(target, prop, value, receiver);
                    }
                    return Reflect.set(target, prop, value, receiver);
                },
            });
            proxyCache.set(obj, proxy);
            return proxy;
        }
        return obj;
    }

    return getProxy(target);
}
