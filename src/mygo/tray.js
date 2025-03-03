import { getCurrentWindow } from '@tauri-apps/api/window';
import { TrayIcon } from '@tauri-apps/api/tray';
// const TrayIcon = window.__TAURI__.tray.TrayIcon;

import * as kk from '/app/lib/nuiData/DataBus.js';

import * as nuiBase from '../lib/nuiBase.js';

const appWebview = getCurrentWindow();

const trayID = window.sessionStorage.getItem('my_tray');

/** @type {TrayIcon} */
let tray = undefined;

if (trayID) {
    tray = await TrayIcon.getById(trayID);
} else {
    tray = await TrayIcon.new({
        tooltip: 'nui engine',
        action: async (event) => {
            console.log(event);
            if (event.type === 'Click' && event.button === 'Left' && event.buttonState === 'Down') {
                await appWebview.show();
                await appWebview.unminimize();
                await appWebview.setSkipTaskbar(false);
                await appWebview.setFocus();
            }
        },
    });
}

window.sessionStorage.setItem('my_tray', tray.id);

// await tray.setVisible(false);
await tray.setTooltip('nui engine');

document.addEventListener('keydown', async function (event) {
    if (event.key === 'F11') {
        event.preventDefault();
        let isF = await appWebview.isFullscreen();
        await appWebview.setFullscreen(!isF);
    } else if (event.key === 'Escape') {
        await appWebview.setSkipTaskbar(true);
        await appWebview.minimize();
        await tray.setVisible(true);
    }
});

nuiBase.hookEvent('exit', () => {
    return;
});
