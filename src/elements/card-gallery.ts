import { LitElement, type TemplateResult, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("card-gallery")
export class CardGallery extends LitElement {
  render(): TemplateResult {
    return html`
      <div class="scroll">
        <div class="gallery">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      font-family: 'Barlow', sans-serif;
      padding: 1rem 0;
    }

    .scroll {
      overflow-x: auto;
      width: 100%;
    }

    .gallery {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 1rem;
      max-height: calc(2 * (180px + 1rem));
      padding: 0 1rem;
      width: max-content;
      min-width: 100%;
      box-sizing: border-box;
    }
  `;
}
