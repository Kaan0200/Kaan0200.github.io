import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('undrtow-page')
export class UndrtowPage extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <a href="/">&larr; Back</a>
        <h1>Undrtow</h1>
        <p>A browser extension designed to connect electronic stores with streaming services so you can listen with one and browse with the other.</p>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #6b6375;
      font-family: system-ui, sans-serif;
    }
    @media (prefers-color-scheme: dark) {
      :host { color: #9ca3af; }
      a { color: #c084fc; }
    }
    a { color: #aa3bff; }
    h1 { color: #08060d; }
    @media (prefers-color-scheme: dark) {
      h1 { color: #f3f4f6; }
    }
  `
}
