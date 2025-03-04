import { Scene } from 'three';

export const BunchScene: Map<string, Scene> = new Map();

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

const scene = new Scene();
BunchScene.set('main', scene);
