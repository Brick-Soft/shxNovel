import { createTimeline } from '@juliangarnierorg/anime-beta';
import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('page-transition')
export class PageTransition extends LitElement {
    static styles = css`
        .back {
            z-index: 5000;
            display: none;

            position: absolute;
            top: 0;

            width: 100%;
            height: 100%;

            background-color: royalblue;
        }

        .front {
            z-index: 5000;
            display: none;

            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            justify-content: space-around;
            flex-direction: row;
            align-items: center;
        }

        .poem {
            opacity: 0;
            color: white;
        }
    `;

    @property({ type: String })
    text?: string;

    @query('.back')
    back: HTMLElement;

    @query('.front')
    front: HTMLElement;

    @query('.poem')
    poem: HTMLElement;

    makeBegin() {
        return createTimeline({ defaults: { duration: 200 } })
            .set(this.back, { left: 0, display: 'flex' })
            .call(() => {
                this.back.style.removeProperty('right');
            })
            .set(this.front, { display: 'flex' })
            .add(this.back, { width: ['0%', '100%'] });
    }

    makeEnd() {
        return createTimeline({ defaults: { duration: 200 } })
            .set(this.back, { right: 0, display: 'flex' })
            .call(() => {
                this.back.style.removeProperty('left');
            })
            .add(this.back, { width: ['100%', '0%'] })
            .set(this.back, { display: 'none' })
            .set(this.front, { display: 'none' });
    }

    render() {
        return html`<div class="back"></div>
            <div class="front"><p class="poem">${this.text}</p></div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'page-tansition': PageTransition;
    }
}
