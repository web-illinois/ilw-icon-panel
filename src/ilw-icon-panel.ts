import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './ilw-icon-panel.styles.css?inline';
import './ilw-icon-panel.css';
import { customElement, property } from "lit/decorators.js";

@customElement("ilw-icon-panel")
export default class IconPanel extends LitElement {

    @property()
    theme = "";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-icon-panel": IconPanel;
    }
}
