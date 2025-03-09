import barba from '@barba/core';
import { ITransitionPage, IView } from '@barba/core/dist/core/src/src/defs';

const pageView = [];
const pageTransition = [];

export let _internal_block_spa = false;

// import barbaPrefetch from '@barba/prefetch';
// barba.use(barbaPrefetch);

export function prefetch(data: String) {
    let href = undefined;

    if (typeof data === 'string') {
        href = data;
    }

    barba.prefetch(href);
}

export function regView(obj: IView | IView[]) {
    if (Array.isArray(obj)) {
        pageView.push(...obj);
    } else {
        pageView.push(obj);
    }
}

export function regTransition(obj: ITransitionPage | ITransitionPage[]) {
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

export function changeUrl(url: string, cb: Function = null): void {
    if (_internal_block_spa) return;
    if (cb instanceof Function) cb();
    barba.go(url);
}

export async function changeUrlAsync(url, f = null) {
    if (_internal_block_spa) return;
    if (f instanceof Function) await f();
    barba.go(url);
}

export function prefetchUrl(url: string) {
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
