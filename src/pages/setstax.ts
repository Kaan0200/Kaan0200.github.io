import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('setstax-page')
export class SetstaxPage extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <a href="/">&larr; Back</a>
        <h1>Set Stax</h1>
        <!-- TODO: page content here -->
        <p>An angular project that is a cloud "set" or playlist for dj mixing.</p>
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
