import { Scene } from 'three';

type SceneBunchJson = Record<string, Scene>;

class SceneBunch extends Map<string, Scene> {
    toJson(): SceneBunchJson {
        const res = {};
        this.forEach((value, key) => {
            res[key] = value.toJSON();
        });
        return res;
    }

    remake(obj: SceneBunchJson) {
        super.clear();
        Object.entries(obj).forEach(([key, value]) => {
            super.set(key, value);
        });
    }
}
export const sceneBunch = new SceneBunch();

const scene = new Scene();
sceneBunch.set('main', scene);
