import { createTimeline } from '@juliangarnierorg/anime-beta';
import * as core from '../../lib/core.js';

// import { scene, textureCache, rendSomeFrames } from '../../lib/nuiScene.js';

core.regTransition({
    name: 'init-transition',
    priority: 10,

    before() {
        core.setSPAInternalBlock(true);
    },

    async leave(data) {
        const timeline = createTimeline({ defaults: { duration: 200 } })
            .add(data.current.container, { opacity: [1, 0] })
            .add(data.current.container, { display: 'none' });

        // @ts-expect-error
        await timeline;

        console.log('leave');
    },

    async enter(data) {
        // prettier-ignore
        const timeline = createTimeline({ defaults: { duration: 1000, ease: 'inOutExpo' } })
            .add(data.next.container, { opacity: [0, 1] });

        // @ts-expect-error
        await timeline;

        console.log('enter');
    },

    after() {
        core.setSPAInternalBlock(false);
    },
});

core.regTransition({
    name: 'default-transition',
    priority: 10,

    before() {
        core.setSPAInternalBlock(true);
    },

    async leave(data) {
        const element = document.querySelector('global-element');
        const one = element.pageTansition.makeBegin();

        const timeline = createTimeline({ defaults: { duration: 200 } })
            .label('begin')
            .add(data.current.container, { opacity: [1, 0] })
            .add(data.current.container, { display: 'none' })
            .sync(one, 'begin');

        // @ts-expect-error
        await timeline;

        console.log('leave');
    },

    async enter(data) {
        const element = document.querySelector('global-element');
        const one = element.pageTansition.makeEnd();

        // prettier-ignore
        const timeline = createTimeline({ defaults: { duration: 1000, ease: 'inOutExpo' } })
            .label('begin')
            .add(data.next.container, { opacity: [0, 1] })
            .sync(one, 'begin')

        // @ts-expect-error
        await timeline;

        console.log('enter');
    },
    after() {
        core.setSPAInternalBlock(false);
    },

    from: {
        custom: (data) => {
            return data.current.namespace !== 'logo';
        },
    },

    to: {
        custom: (data) => {
            return data.next.namespace !== 'logo';
        },
    },
});

core.regView({
    namespace: 'about',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/default.png');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter about');
    },
});

core.regView({
    namespace: 'home',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/img1.png');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter home');
    },
    afterLeave(data) {},
});

core.regView({
    namespace: 'options',
    async beforeEnter(data) {
        // const res = await textureCache.load('/background/img2.jpg');
        // const background = scene.get('background');
        // background.playTextureTransitionAnime(res);
        console.log('beforeEnter options');
    },
});
