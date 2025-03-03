import { Cache } from 'three';

import { initSPA } from './src/lib/core';
import '@shoelace-style/shoelace/dist/themes/light.css';

/**
 * [+] OK! use
 *     await import('...');
 *
 * [-] NO! Dont use
 *     import '...';
 */

Cache.enabled = true;

// hack
await import('./src/mygo/hack/spa');
// await import('./src/mygo/hack/ImageUtils');

// plain
await import('./src/mygo/resizeMain');

// route
await import('./src/mygo/route/basic');
await import('./src/mygo/route/galgame');

initSPA('spa');
