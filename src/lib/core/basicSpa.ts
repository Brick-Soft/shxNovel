import barba from '@barba/core';

const pageView = [];
const pageTransition = [];

export let _internal_block_spa = false;

// import barbaPrefetch from '@barba/prefetch';
// barba.use(barbaPrefetch);

/** @param {Object | String} data */
export function prefetch(data) {
    let href = undefined;
    if (data instanceof String) {
        href = data;
    } else if (data instanceof Object) {
        href = data?.next?.url?.href;
    }

    barba.prefetch(href);
}

export function regView(obj) {
    if (Array.isArray(obj)) {
        pageView.push(...obj);
        return;
    }
    pageView.push(obj);
}

export function regTransition(obj) {
    if (Array.isArray(obj)) {
        pageTransition.push(...obj);
        return;
    }
    pageTransition.push(obj);
}

export function initSPA(prefix = 'spa') {
    barba.init({
        schema: { prefix: `data-${prefix}` },
        transitions: pageTransition,
        views: pageView,
        cacheIgnore: true, // true, otherwise minor cache leak
        // preventRunning: true, // useless
    });
}

export function setSPAInternalBlock(status = true) {
    _internal_block_spa = status;
}

/**
 * @param {string} url
 * @param {null | Function} [cb=null]
 */
export function changeUrl(url, cb = null) {
    if (_internal_block_spa) return;
    if (cb instanceof Function) cb();
    barba.go(url);
}

/**
 * @param {string} url
 * @param {null | Function} [f=null]
 */
export async function changeUrlAsync(url, f = null) {
    if (_internal_block_spa) return;
    if (f instanceof Function) await f();
    barba.go(url);
}

export function prefetchUrl(url) {
    barba.prefetch(url);
}

export let defaultHomeUrl = '/src/home.html';
export function goBackPage() {
    let pre = barba.history.previous;
    if (pre == null) {
        return changeUrl(defaultHomeUrl);
    }
    let url = pre.url;
    changeUrl(url);
}
