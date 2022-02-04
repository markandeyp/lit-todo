import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("todo-header")
export default class ToDoHeader extends LitElement {
  static styles = css`
    header {
      padding: 0 1rem;
      display: flex;
      height: 100px;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      font-size: 3rem;
      font-weight: 400;
    }

    .logo {
      width: 50px;
    }
  `;

  @property()
  title: string = "App title";

  render() {
    return html`<header>
      <a href="https://lit.dev" target="_blank">
        <img class="logo" src="images/logo.svg" alt="Logo" />
      </a>
      <h1 class="title">${this.title}</h1>
      <a href="https://github.com/markandeyp" target="_blank">
        <img class="logo" src="images/github.svg" alt="Github" />
      </a>
    </header>`;
  }
}
