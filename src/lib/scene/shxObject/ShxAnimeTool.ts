import { Timeline } from '@juliangarnierorg/anime-beta';

import { Action, addAction, rmvAction } from '../actions';
import { rendSomeFrames } from '../renderLoop';
import { ShxObject } from './shx';

/**
 *
 */
export function setAnime(item: ShxObject, anime: Timeline, cb: Action) {
    item.material.userData.timeline = anime;
    item.material.userData.runningID = addAction(cb); // add
    return item.material.userData.runningID;
}

/**
 *
 */
export function removeAnime(item: ShxObject) {
    const { runningID } = item.material.userData;

    rmvAction(runningID); // if not exist, its alright
    item.material.userData.runningID = 0;
    rendSomeFrames(); // unstable fix for loop diff
}

/**
 *
 */
export function removeAnimeById(item: ShxObject, runningID: any) {
    rmvAction(runningID); // if not exist, its alright
    if (runningID === item.material.userData.runningID)
        item.material.userData.runningID = 0;
    rendSomeFrames(); // unstable fix for loop diff
}

/**
 * Try to halt the playing anime.
 */
export function haltCheck(item: ShxObject) {
    const { timeline } = item.material.userData;
    if (timeline instanceof Timeline) {
        if (!timeline.completed) timeline.complete();
        this.specialAnime = undefined;
        removeAnime(item);
    }
}

/**
 * Warp given anime (for on-demand-render).
 */
export function warpAnime(item: ShxObject, anime: Timeline, cb: Action) {
    const userOnBegin = anime.onBegin;
    anime.onBegin = (self) => {
        haltCheck(item);
        const id = setAnime(item, anime, cb); // add

        // @ts-expect-error
        self._shxId = id;

        userOnBegin(self);
    };

    const userOnComplete = anime.onComplete;
    anime.onComplete = (self) => {
        userOnComplete(self);

        // @ts-expect-error
        removeAnimeById(item, self._shxId); // rmv
    };
}

export function bindAnimeCtx(item: ShxObject) {
    const ctx: Record<string, Function> = {
        setAnime,
        removeAnime,
        removeAnimeById,
        haltCheck,
        warpAnime,
    };
    for (const key in ctx) ctx[key].bind(null, item);
    return ctx;
}
