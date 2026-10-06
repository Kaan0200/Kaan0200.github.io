import "threedeezee/elements";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-shell")
export class AppShell extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100vh;
    }
    tdz-canvas {
      flex: 1;
      min-width: 0;
    }
    tdz-panel {
      padding: 32px;
      background: #fff;
      border: 1px solid #333;
      border-radius: 1rem;
      font: 16px/1.5 system-ui;
    }
    tdz-panel[movable] {
      cursor: grab;
    }
    h1 {
      margin: 0 0 8px;
      font-size: 32px;
    }
    p {
      margin: 0;
    }
    .subdue {
      color: #333;
    }

    .left-pad,
    .right-pad {
      flex: none;
      width: 32rem;
      background: #1c1c1c;
    }
    .left-pad {
      border-right: 1px solid #333;
    }
    .right-pad {
      border-left: 1px solid #333;
    }
  `;

  render() {
    // Camera locked to the y axis: dolly-step="0" kills the wheel zoom and
    // world-width="0" pins world x = 0 to the screen centre, so content is
    // laid out around x = 0.
    return html`
      <div class="left-pad"></div>
      <tdz-canvas center-y="2500" dolly-step="0" world-width="0">
        <tdz-panel x="100" y="600" width="300">
          <h2>Education</h2>
          <p>Bachelors of Science in Computer Science</p>
          <p>Case Western Reserve University</p>
          <p>2016</p>
        </tdz-panel>
        <tdz-panel x="-420" y="800" width="380">
          <h2>True Expertise</h2>
          <p>
            Proficiency with AI programming tools is no excuse for true real
            world engineering experience. Deeper understanding is always
            necessary to achieve scalable, maintainable, and performant
            software. These are the concepts I have mastered.
          </p>
          <h3>Languages</h3>
          <p>Java, C#, .NET, HTML/CSS, TS/JS, SQL</p>
          <h3>Concepts</h3>
          <p>OOP, SOLID, Agile, Big-O</p>
        </tdz-panel>
        <tdz-panel x="80" y="1200" width="300">
          <h2>Web Development</h2>
          <p>10+ years of experience building web-interacting applications</p>
          <h2>Design Insights</h2>
          <p>
            Design and interface passion makes me excel at creating easy to use
            and intuitive interfaces. Focusing on the user experience.
          </p>
          <h2>Software Architecture</h2>
          <p>
            Senior level experience building all aspects of software from
            databases, server sides, and front-ends.
          </p>
          <h2>Enterprise DevOps</h2>
          <p>
            Extensive experience with Enterprise sized programming operations,
            including CI/CD, testing methodologies, and deployment strategies.
            As well as the experience of guiding teams through these.
          </p>
        </tdz-panel>
        <tdz-panel x="-300" y="2120" width="200">
          <p class="subdue">
            Drag downwards to scroll up and learn more about my skills and
            experiences
          </p>
        </tdz-panel>
        <tdz-panel x="-300" y="2300" width="600">
          <h1>A. Kaan A. - Web Software Engineer</h1>
        </tdz-panel>
        <tdz-panel x="100" y="2460" width="200">
          <p class="subdue">
            Drag upwards to scroll down and see my projects and works
          </p>
        </tdz-panel>
        <tdz-panel x="-360" y="2960" width="300">
          <h2>Digital Horizons</h2>
          <p>
            A spacey place to listen to music and mixes, check out Cleveland's
            best DJs and see other pilots exploring the musical collection.
          </p>
        </tdz-panel>
        <tdz-panel x="-60" y="3260" width="300">
          <h2>ThreeDeeZee</h2>
          <p>
            UI component library designed to create depth and physicality
            through a 2.5D interface.
          </p>
        </tdz-panel>
        <tdz-panel x="-260" y="3600" width="300">
          <h2>Loonar</h2>
          <p>
            An open source, self-hostable alternative to streaming music that
            aims to help users grow their personal collection, while offering
            fresh explorations to keep your collections feeling new.
          </p>
        </tdz-panel>
        <tdz-panel x="20" y="3900" width="300">
          <h2>Clooneer</h2>
          <p>
            An open source interface for synchronizing DJ crates on various
            computers, and devices. Allows for copying crates onto new places
            and adding tracks dropped into the crates, back into the source
            library.
          </p>
        </tdz-panel>
        <tdz-panel x="-400" y="4100" width="300">
          <h2>Rhoob</h2>
          <p>
            An application for identifying metadata problems, deduplication,
            missing tags, and more in mp3s and your music collection.
          </p>
        </tdz-panel>
        <tdz-panel x="-100" y="4500" width="300">
          <h2>Undrtow</h2>
          <p>
            Browser extension for browsing music on various online music
            retailers while adding buttons that connect to your preferred
            streaming service so you can browse on one site and listen in a
            different app.
          </p>
        </tdz-panel>
      </tdz-canvas>
      <div class="right-pad"></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-shell": AppShell;
  }
}
