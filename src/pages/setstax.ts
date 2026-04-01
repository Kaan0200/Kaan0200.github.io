import { LitElement, html, css, type TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import litLogo from "../assets/lit.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";

@customElement("setstax-page")
export class SetstaxPage extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <a href="/">&larr; Back</a>
        <h1>Set Stax</h1>
        <div class="hero">
          <img src=${heroImg} class="base" width="170" height="179" alt="" />
          <img src=${litLogo} class="framework" alt="Lit logo" />
          <img src=${viteLogo} class="vite" alt="Vite logo" />
        </div>
        <p>
          An angular project that is a cloud "set" or playlist for dj mixing.
        </p>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #6b6375;
      font-family: "Barlow", sans-serif;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        color: #9ca3af;
      }
      a {
        color: #c084fc;
      }
    }
    a {
      color: #aa3bff;
    }
    h1 {
      color: #08060d;
    }
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f3f4f6;
      }
    }
  `;
}
