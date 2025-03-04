import * as THREE from 'three';
import { Timeline } from '@juliangarnierorg/anime-beta';

export type ShxObject = THREE.Mesh & {
    material: THREE.Material & {
        userData: Record<string, any> & {
            vertexShader: string;
            fragmentShader: string;

            runningID: undefined | number;
            timeline: undefined | Timeline;
        };
    };
};
