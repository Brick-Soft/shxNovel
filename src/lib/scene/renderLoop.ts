import { WebGLRenderer } from 'three';
import { engine } from '@juliangarnierorg/anime-beta';

import { actions, callActions } from './actions';
import { sceneBunch } from './sceneBunch';
import { cameraBunch } from './cameraBunch';

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

/** internal counter */
let _framesToRender = 0;

export function getFramesToRender() {
    return _framesToRender;
}

/** Make sure the final value is non-negative */
export function _setFramesToRender(frames: number) {
    _framesToRender = frames;
}

/** Make sure the final value is non-negative */
export function _addFramesToRender(frames: number = 5) {
    _framesToRender += frames;
}

export function rendSomeFrames(cnt = 60) {
    cnt = Math.ceil(Math.max(0, cnt));
    _addFramesToRender(cnt);
}

/** default renderer */
export const renderer = new WebGLRenderer({
    // antialias: nuiConfig.scene.antialias,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

/** */

engine.useDefaultMainLoop = false;

export let renderLoop = () => {
    engine.update();

    let flag = 0;

    if (actions.size) {
        const result = callActions();
        for (const item of result) {
            if (item) flag = 1;
        }
    }

    if (_framesToRender) {
        _framesToRender--;
        flag = 1;
    }

    if (flag) {
        /**
         * @todo
         * renderer event, for off-screen rendering
         */

        /** main-scene */
        renderer.setRenderTarget(null);
        renderer.render(sceneBunch.get('main'), cameraBunch.get('main'));

        /**
         * @todo
         * post effect
         */
    }
};

renderer.setAnimationLoop(renderLoop);

export function setRenderLoop(loop: () => void) {
    renderLoop = loop;
}
