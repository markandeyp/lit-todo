import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("todo-app")
export default class ToDoApp extends LitElement {
  static styles = css`
    .todos {
      width: 70%;
      margin: 0 auto;
    }
  `;

  @property({ type: Array })
  items = [
    {
      text: "Install Lit",
      done: false,
    },
    {
      text: "Build Web Components",
      done: false,
    },
  ];

  private _addToDo(e: CustomEvent) {
    this.items.push({ text: e.detail.text, done: false });
    this.requestUpdate();
  }

  render() {
    return html`<todo-header title="Let's Do It"></todo-header>
      <todo-add @addtodo=${this._addToDo}></todo-add>
      <div class="todos">
        ${this.items.map(
          (item) =>
            html`<todo-item text=${item.text} ?done=${item.done}></todo-item>`
        )}
      </div>`;
  }
}
