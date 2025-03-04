import { renderer } from './scene/renderLoop';

import './scene/actions';
import './scene/renderLoop';

import './scene/BunchCamera';
import './scene/BunchScene';

export * from './scene/actions';
export * from './scene/renderLoop';

export * from './scene/BunchCamera';
export * from './scene/BunchScene';

export function initDom(el: HTMLElement) {
    if (el === undefined) el = document.body;
    el.appendChild(renderer.domElement);
}
