import { TauriEvent } from '@tauri-apps/api/event';
import { getCurrentWindow } from '@tauri-apps/api/window';

import barba from '@barba/core';

import { eventController } from './core/MListener.js';

export * from './core/BidirectionalMap.js';
export * from './core/createDeepProxy.js';
export * from './core/Listener.js';
export * from './core/MListener.js';

//
// Event `resize`
//

export const resolution = {
    w: 1920,
    h: 1080,
    get aspect() {
        return this.w / this.h;
    },
};

export function setResolution(w = 1920, h = 1080) {
    resolution.w = w;
    resolution.h = h;
    __solveResize();
}

// exactly ..... `number`
type TimerId = ReturnType<typeof setTimeout>;

let resizeTimeout: TimerId;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(__solveResize, 30);
});

const resizeInfo = {};

__solveResize();
function __solveResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const A = resolution.aspect;

    Object.assign(resizeInfo, { width, height });

    if (width >= height) {
        const ia = width / height;
        if (A >= ia) {
            Object.assign(resizeInfo, {
                imarginTop: (height - width / A) / 2,
                imarginLeft: 0,
                iwidth: width,
                iheight: width / A,
            });
        } else {
            Object.assign(resizeInfo, {
                imarginTop: 0,
                imarginLeft: (width - height * A) / 2,
                iwidth: height * A,
                iheight: height,
            });
        }
    } else {
        const ia = height / width;
        if (A >= ia) {
            Object.assign(resizeInfo, {
                imarginTop: (width - height / A) / 2,
                imarginLeft: 0,
                iwidth: height,
                iheight: height / A,
            });
        } else {
            Object.assign(resizeInfo, {
                imarginTop: 0,
                imarginLeft: (height - width * A) / 2,
                iwidth: width * A,
                iheight: width,
            });
        }
    }

    eventController.emit('resize', resizeInfo);
}

export function getMediaRotateSize() {
    return resizeInfo;
}

export function hookEvent(event, fn) {
    eventController.on(event, fn);
}

//
// Event `exit`
//

const appWebview = getCurrentWindow();
let comfirmBox = null;
let useConfirmBox = true;

export function initConfirmBox(el) {
    comfirmBox = el;
}

export function setConfirmBoxActiveStatus(ok = true) {
    useConfirmBox = ok;
}

export async function tryExitGame() {
    await appWebview.close();
}

const unlisten = await appWebview.listen(
    TauriEvent.WINDOW_CLOSE_REQUESTED,
    async () => {
        if (comfirmBox && useConfirmBox) {
            await comfirmBox.ask();
        } else {
            await decideExitGame();
        }
    }
);

export async function decideExitGame() {
    await eventController.emitAsync('exit');
    unlisten();
    await appWebview.destroy();
}

//
// [SPA]
//   + barba.js
//

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
