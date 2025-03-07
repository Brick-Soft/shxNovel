import * as THREE from 'three';
import { Timeline } from '@juliangarnierorg/anime-beta';

export type AllShxItem = ShxObject;

export type ShxObjectUserData = Record<string, any> & {
    type: 'shxObject';

    vertexShader: string;
    fragmentShader: string;

    runningID: undefined | number;
    timeline: undefined | Timeline | string;
};

export interface ShxObject extends THREE.Mesh {
    material: THREE.ShaderMaterial & {
        userData: ShxObjectUserData;
    };
}
