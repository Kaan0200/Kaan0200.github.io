import { customElement, property } from "lit/decorators.js";
import type { MyElement } from "./elements/my-element";
import { css, html, LitElement, type TemplateResult } from 'lit';

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement,
    'project': ProjectCard,
  }
}

@customElement('project-card')
export class ProjectCard extends LitElement {

    @property()
    public linkto: string = '/';

    render():TemplateResult {
        return html`
        <a href=${this.linkto}><slot></slot></a>
        `
    }

    static styles = css`
        a {
            text-decoration: none;
            color: inherit;
            display: block;
            cursor: pointer;
        }
    `
}
