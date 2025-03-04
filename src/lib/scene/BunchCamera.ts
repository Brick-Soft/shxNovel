import { Camera, OrthographicCamera } from 'three';

export const BunchCamera: Map<string, OrthographicCamera> = new Map();

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

const camera = new OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    1000
);

BunchCamera.set('main', camera);
