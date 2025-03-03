import { nuiConfig, CONFIG_READY, nuiCache, CACHE_READY } from '../../lib/nuiData';
import { rendSomeFrames, textureCache } from '../../lib/nuiScene';

import * as nuiBase from '../../lib/nuiBase';

//
// Config
//

function hookConfigReady() {
    nuiBase.setConfirmBoxActiveStatus(nuiConfig.basic.keepLeaveMention);

    textureCache.changeMinFilter(nuiConfig.scene.minfilter);
    textureCache.changeMagFilter(nuiConfig.scene.magfilter);

    rendSomeFrames();

    window.removeEventListener('config-ready', hookConfigReady);
}

if (CONFIG_READY) {
    hookConfigReady();
} else {
    window.addEventListener('config-ready', hookConfigReady);
}

//
// Cache
//

function hookCacheReady() {
    window.removeEventListener('cache-ready', hookCacheReady);
}

if (CACHE_READY) {
    hookCacheReady();
} else {
    window.addEventListener('cache-ready', hookCacheReady);
}
