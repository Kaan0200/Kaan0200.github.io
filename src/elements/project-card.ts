import { LitElement, type TemplateResult, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("project-card")
export class ProjectCard extends LitElement {
  @property()
  public linkto: string = "/";

  @property()
  public title: string = "--";

  @property()
  public tags: string = "";

  render(): TemplateResult {
    const tagList = this.tags ? this.tags.split(",").map((t) => t.trim()) : [];

    return html`
      <a href=${this.linkto} class="card">
        <h3 class="title">${this.title}</h3>
        <div class="description">
          <slot></slot>
        </div>
        ${tagList.length
          ? html`
              <ul class="tags">
                ${tagList.map((tag) => html`<li>${tag}</li>`)}
              </ul>
            `
          : null}
      </a>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 400px;
      height: 180px;
      box-sizing: border-box;
      font-family: "Barlow", sans-serif;
    }

    .card {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      box-sizing: border-box;
      transition:
        border-color 0.2s,
        box-shadow 0.2s;
    }

    .card:hover {
      border-color: rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .title {
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      color: #f3f4f6;
    }

    .description {
      flex: 1;
      font-size: 0.85rem;
      line-height: 1.4;
      color: #9ca3af;
      overflow: hidden;
    }

    .tags {
      list-style: none;
      margin: 0.75rem 0 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tags li {
      font-size: 0.7rem;
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: #9ca3af;
    }

    @media (prefers-color-scheme: light) {
      .card {
        border-color: rgba(0, 0, 0, 0.12);
      }
      .card:hover {
        border-color: rgba(0, 0, 0, 0.25);
      }
      .title {
        color: #08060d;
      }
      .description {
        color: #6b6375;
      }
      .tags li {
        background: rgba(0, 0, 0, 0.06);
        color: #6b6375;
      }
    }
  `;
}
