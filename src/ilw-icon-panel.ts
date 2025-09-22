import { html, LitElement, unsafeCSS } from "lit";
// @ts-ignore
import styles from "./ilw-icon-panel.styles.css?inline";
import "./ilw-icon-panel.css";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("ilw-icon-panel")
export default class IconPanel extends LitElement {
    @property()
    border: "blue" | "orange" = "blue";

    @state()
    _hasLink: boolean = false;

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    protected _slotsChanged() {
        const shadowRoot = this.shadowRoot;
        if (!shadowRoot) return;

        const footers = shadowRoot.querySelector(
            "slot[name=link]",
        ) as HTMLSlotElement;
        this._hasLink = footers?.assignedElements().length > 0;
    }

    render() {
        let classList = {
            "ilw-icon-panel": true,
            "ilw-icon-panel--blue": this.border === "blue",
            "ilw-icon-panel--orange": this.border === "orange",
        };
        return html`
            <div class=${classMap(classList)}>
                <div class="icon-wrapper">
                    <slot name="icon"></slot>
                </div>
                <div class="content">
                    <div
                        class="link-wrapper ${this._hasLink ? "has-link" : ""}"
                    >
                        <slot
                            name="link"
                            @slotchange=${this._slotsChanged}
                        ></slot>
                    </div>
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ilw-icon-panel": IconPanel;
    }
}
