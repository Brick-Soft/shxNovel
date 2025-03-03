import * as THREE from 'three';
import * as nuiScene from '../lib/nuiScene'
import * as nuiBase from '../lib/nuiBase'
import { animate, createTimeline } from '@juliangarnierorg/anime-beta';

nuiScene.init(document.getElementsByClassName('innerBody')[0]);
const { scene, camera, renderer } = nuiScene;

camera.position.z = 500;
camera.position.x = 0;

renderer.setClearColor(0x1e2226, 1)

resize(nuiBase.getMediaRotateSize());
nuiBase.hookEvent('resize', (data) => {
    resize(data);
    nuiScene.rendSomeFrames();
});

function resize(data) {
    const frustumSize = 1080;
    const { iwidth, iheight } = data;

    let w, h, fw, fh;
    if (iwidth >= iheight) { w = iwidth, h = iheight }
    else { w = iheight, h = iwidth }

    // remind user `devicePixelRatio`
    fw = w / window.devicePixelRatio;
    fh = h / window.devicePixelRatio;

    const aspect = fw / fh;
    const cw = frustumSize * aspect;
    const ch = frustumSize;

    camera.left = cw / -2
    camera.right = cw / 2
    camera.top = ch / 2
    camera.bottom = ch / -2

    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}