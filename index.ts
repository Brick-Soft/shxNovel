import { Cache } from 'three';
import { initSPA } from './src/lib/core';
import '@shoelace-style/shoelace/dist/themes/light.css';

// make sure before any THREE operation
//
Cache.enabled = true;

// hack
await import('./src/mygo/hack/spa');
await import('./src/mygo/hack/ImageUtils');

// debug
await import('./src/mygo/scene/showFPS');

// plain
await import('./src/mygo/resizeMain');
await import('./src/mygo/resizeCanvas');

// route
await import('./src/mygo/route/basic');
await import('./src/mygo/route/galgame');

initSPA('spa');
