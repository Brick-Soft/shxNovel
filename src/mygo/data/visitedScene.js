import { load } from '@tauri-apps/plugin-store';
import { ChthollyTree } from '../../lib/nuiData/ChthollyTree';

export const visitedScene = new ChthollyTree();
visitedScene.saveVisitedScene = saveVisitedScene;
window.visitedScene = visitedScene;

const visitedSceneStore = await load(`visitedScene.json`, { autoSave: true });
let visitedSceneContent = await visitedSceneStore.get('content');

if (visitedSceneContent) {
    // restore
    visitedSceneContent = JSON.parse(visitedSceneContent);

    const arr = visitedSceneContent;
    const root = visitedScene.arr.root;

    for (const item of arr) {
        const [l, r] = item;
        visitedScene.arr.insert(root, l, r);
    }
} else {
    // ::: have no previous data
    // do nothing
}

export async function saveVisitedScene() {
    const res = visitedScene.toArray();
    const str = JSON.stringify(res);
    await visitedSceneStore.set('content', str);
}
