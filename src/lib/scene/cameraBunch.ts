import { Camera, OrthographicCamera } from 'three';

class CameraBunch extends Map<string, OrthographicCamera> {
    toJson() {
        const res = {};
        this.forEach((value, key) => {
            res[key] = value.toJSON();
        });
        return res;
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
