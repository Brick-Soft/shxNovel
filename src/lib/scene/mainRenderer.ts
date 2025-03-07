import { WebGLRenderer } from 'three';

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

/** default renderer */
export const mainRenderer = new WebGLRenderer({
    // antialias: nuiConfig.scene.antialias,
});

mainRenderer.setPixelRatio(window.devicePixelRatio);
mainRenderer.setSize(width, height);
