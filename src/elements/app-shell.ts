import { LitElement, html, type TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import '../pages/setstax.ts'
import '../pages/undrtow.ts'
import '../pages/resume.ts'

@customElement('app-shell')
export class AppShell extends LitElement {
  @state()
  private path: string = window.location.pathname

  connectedCallback(): void {
    super.connectedCallback()
    window.addEventListener('popstate', this._onPopState)
    window.addEventListener('click', this._onLinkClick)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.removeEventListener('popstate', this._onPopState)
    window.removeEventListener('click', this._onLinkClick)
  }

  private _onPopState = () => {
    this.path = window.location.pathname
  }

  private _onLinkClick = (e: MouseEvent) => {
    // Walk composedPath to find <a> across shadow DOM boundaries
    const path = e.composedPath()
    const anchor = path.find(
      (el): el is HTMLAnchorElement => el instanceof HTMLAnchorElement
    )
    if (!anchor) return

    const href = anchor.getAttribute('href')
    if (!href || !href.startsWith('/')) return
    if (e.metaKey || e.ctrlKey || e.shiftKey) return

    e.preventDefault()
    this.navigate(href)
  }

  navigate(path: string): void {
    window.history.pushState({}, '', path)
    this.path = path
  }

  private _renderPage(): TemplateResult {
    const p = this.path.replace(/\/+$/, '') || '/'

    switch (p) {
      case '/setstax':
        return html`<setstax-page></setstax-page>`
      case '/undrtow':
        return html`<undrtow-page></undrtow-page>`
      case '/resume':
        return html`<resume-page></resume-page>`
      default:
        return html`<slot></slot>`
    }
  }

  render(): TemplateResult {
    return this._renderPage()
  }
}
