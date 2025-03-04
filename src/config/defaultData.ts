import mapJson from '../../public/story/map.json';

/** @interface */
const DefaultData = Object.freeze({
    version: '0.0.1',
    basic: {
        keepLeaveMention: true,
    },
    sound: {
        ui: 1,
    },
    scene: {
        antialias: true,
        minfilter: 1008,
        magfilter: 1006,
    },
    save: [],
    qsave: [],
    entry: mapJson.entry,
});

const DefaultInfo = Object.freeze({
    chapter: structuredClone(mapJson.entry),
    chunk: '1',
    index: 0,
    sceneData: '',
});

const DefaultSaveSlot = Object.freeze({
    used: false,
    img: '',
    text: '',
    ...DefaultInfo,
});

export { DefaultData, DefaultInfo, DefaultSaveSlot };
