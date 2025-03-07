import Stats from 'three/examples/jsm/libs/stats.module.js';
import { addAction } from '../../lib/scene/actions';

export const stats = new Stats();
document.body.appendChild(stats.dom);

addAction(() => {
    stats.update();
    return false;
});
