import { shxOptions } from '@config/shxOptions';
import { fragments } from '@config/fragments';
import { vertexs } from '@config/vertexs';
import { ShxObject } from 'types/shx';

export function setShxFragmentShader(
    item: ShxObject,
    name = shxOptions.material.fragmentShader[0]
) {
    if (name === item.material.userData.fragmentShader) return;

    const shader = fragments[name];
    if (!shader) return;

    item.material.userData.fragmentShader = name;
    item.material.fragmentShader = shader;
    item.material.needsUpdate = true;
}

export function setShxVertexShader(
    item: ShxObject,
    name = shxOptions.material.vertexShader[0]
) {
    if (name === item.material.userData.vertexShader) return;

    const shader = vertexs[name];
    if (!shader) return;

    item.material.userData.vertexShader = name;
    item.material.vertexShader = shader;
    item.material.needsUpdate = true;
}
