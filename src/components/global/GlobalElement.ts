import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './HotFix';

@customElement('global-element')
export class GlobalElement extends LitElement {
    render() {
        return html`<hot-fix></hot-fix>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'global-element': GlobalElement;
    }
}
