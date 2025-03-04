import * as core from '../lib/core';

//
// Note:
//
// if    width < height
// then  rorate the screen
//       width & height on screan will swap
//

//
// remind that
//       :root { --var-width, --var-height }
//       is the behavior, instead of true device size
//

const W = 1920,
    H = 1080,
    A = W / H;

solveResize(core.getMediaRotateSize());
window.addEventListener('DOMContentLoaded', () => {
    solveResize(core.getMediaRotateSize());
});

core.hookEvent('resize', (data: core.ResizeInfoType) => {
    solveResize(data);
});

function solveResize(data: core.ResizeInfoType) {
    const { width, height, imarginTop, imarginLeft, iwidth, iheight } = data;
    const rootStyle = document.documentElement.style;
    const bodyStyle = document.getElementsByTagName('body')[0].style;

    if (width >= height) {
        rootStyle.setProperty('--var-width', `${width}px`);
        rootStyle.setProperty('--var-height', `${height}px`);
        rootStyle.setProperty('width', `${width}px`);
        rootStyle.setProperty('height', `${height}px`);
        // rootStyle.setProperty('font-size', `${16 * width / 1920}px`);

        bodyStyle.setProperty('transform', `rotate(0deg)`);
        bodyStyle.setProperty('transform-origin', `unset`);
    } else {
        rootStyle.setProperty('--var-width', `${height}px`);
        rootStyle.setProperty('--var-height', `${width}px`);
        rootStyle.setProperty('width', `${width}px`);
        rootStyle.setProperty('height', `${height}px`);
        // rootStyle.setProperty('font-size', `${16 * height / 1920}px`);

        bodyStyle.setProperty('transform', `rotate(90deg)`);
        bodyStyle.setProperty(
            'transform-origin',
            `${width / 2}px ${width / 2}px`
        );
    }

    rootStyle.setProperty('--var-imarginTop', `${imarginTop}px`);
    rootStyle.setProperty('--var-imarginLeft', `${imarginLeft}px`);
    rootStyle.setProperty('--var-iwidth', `${iwidth}px`);
    rootStyle.setProperty('--var-iheight', `${iheight}px`);
    rootStyle.setProperty('font-size', `${(16 * iwidth) / 1920}px`);
}

export { solveResize };
