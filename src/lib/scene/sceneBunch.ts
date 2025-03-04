import { Scene } from 'three';

class SceneBunch extends Map<string, Scene> {
    toJson() {
        const res = {};
        this.forEach((value, key) => {
            res[key] = value.toJSON();
        });
        return res;
    }
}
export const sceneBunch = new SceneBunch();
// export const BunchScene: Map<string, Scene> = new Map();

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

const scene = new Scene();
sceneBunch.set('main', scene);
