import { PerspectiveCamera, OrthographicCamera } from 'three';

type TCamera = PerspectiveCamera | OrthographicCamera;
type CameraBunchJson = Record<string, TCamera>;

class CameraBunch extends Map<string, TCamera> {
    toJson(): CameraBunchJson {
        const res = {};
        this.forEach((value, key) => {
            res[key] = value.toJSON();
        });
        return res;
    }

    remake(obj: CameraBunchJson) {
        super.clear();
        Object.entries(obj).forEach(([key, value]) => {
            super.set(key, value);
        });
    }
}

export const cameraBunch = new CameraBunch();

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

cameraBunch.set('main', camera);
