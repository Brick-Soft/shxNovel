import { animate, createTimeline } from '@juliangarnierorg/anime-beta';
import * as nuiBase from '../../lib/core.js';
// import { scene, textureCache, rendSomeFrames } from '../../lib/nuiScene.js';

nuiBase.regTransition({
    name: 'default-transition',
    before(data) {
        nuiBase.setSPAInternalBlock(true);
    },
    async leave(data) {
        const timeline = createTimeline({ defaults: { duration: 200 } })
            .add(data.current.container, { opacity: [1, 0] })
            .add(data.current.container, { display: 'none' });
        await timeline;
        console.log('leave');
    },
    async enter(data) {
        // prettier-ignore
        const timeline = createTimeline({ defaults: { duration: 1000, ease: 'inOutExpo' } })
            .add(data.next.container, { opacity: [0, 1] });
        await timeline;
        console.log('enter');
    },
    after(data) {
        nuiBase.setSPAInternalBlock(false);
    },
    // from: {
    //     custom: (data) => {
    //         return (data.current.namespace != 'entry')
    //     }
    // }
});

nuiBase.regView({
    namespace: 'fir',
    beforeEnter(data) {
        console.log(`beforeEnter`);
    },
    beforeLeave(data) {
        console.log(`beforeLeave`);
    },
});

nuiBase.regView({
    namespace: 'about',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/default.png');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter about');
    },
});

nuiBase.regView({
    namespace: 'home',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/img1.png');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter home');
    },
});

nuiBase.regView({
    namespace: 'options',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/img2.jpg');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter options');
    },
});
