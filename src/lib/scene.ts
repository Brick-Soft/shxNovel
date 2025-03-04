import { renderer } from './scene/renderLoop';

import './scene/actions';
import './scene/renderLoop';
import './scene/cameraBunch';
import './scene/sceneBunch';

export * from './scene/actions';
export * from './scene/renderLoop';

export * from './scene/cameraBunch';
export * from './scene/sceneBunch';

export function initDom(el: HTMLElement) {
    if (el === undefined) el = document.body;
    el.appendChild(renderer.domElement);
}
