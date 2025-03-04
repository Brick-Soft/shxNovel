import { hookEvent, getMediaRotateSize, ResizeInfoType } from '../lib/core';
import { rendSomeFrames, initDom, cameraBunch, renderer } from '../lib/scene';

initDom(document.querySelector('.innerBody'));

const camera = cameraBunch.get('main');

camera.position.z = 512;
camera.position.x = 0;

renderer.setClearColor(0x1e2226, 1);

resize(getMediaRotateSize());
hookEvent('resize', (data: ResizeInfoType) => {
    resize(data);
    rendSomeFrames();
});

function resize(data: ResizeInfoType) {
    const frustumSize = 1080;
    const { iwidth, iheight } = data;

    let w: number, h: number, fw: number, fh: number;
    if (iwidth >= iheight) {
        (w = iwidth), (h = iheight);
    } else {
        (w = iheight), (h = iwidth);
    }

    // remind user `devicePixelRatio`
    fw = w / window.devicePixelRatio;
    fh = h / window.devicePixelRatio;

    const aspect = fw / fh;
    const cw = frustumSize * aspect;
    const ch = frustumSize;

    camera.left = cw / -2;
    camera.right = cw / 2;
    camera.top = ch / 2;
    camera.bottom = ch / -2;

    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}
