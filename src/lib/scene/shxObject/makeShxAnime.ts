import * as THREE from 'three';
import {
    animate,
    createTimeline,
    eases,
    Timeline,
} from '@juliangarnierorg/anime-beta';

import { ShxObject } from '../../../../types/shx';
import { Action } from '../actions';
import * as Tool from './ShxAnimeTool';


type AnimeArgs = {
    texture: THREE.Texture;
    duration?: number;
    cb?: Action;
    ease?: string;
};

function makeArgs(init: AnimeArgs, user: AnimeArgs) {
    return Object.assign(init, structuredClone(user));
}

export function makeShxAnime(item: ShxObject, userArgs: AnimeArgs) {}

export function textueTransition(item: ShxObject, userArgs: AnimeArgs) {
    const { texture, duration, cb, ease } = makeArgs(
        { texture: '', duration: 500, cb: true, ease: 'linear' },
        userArgs
    );
}
