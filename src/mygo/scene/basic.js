import { scene, camera, renderer, textureCache } from '../../lib/nuiScene.js';

// bind renderer for auto GPU cache
textureCache.bindRenderers.push(renderer);
