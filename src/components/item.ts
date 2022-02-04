import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("todo-item")
export default class ToDoItem extends LitElement {
  @property()
  text: string = "";

  @property({ type: Boolean })
  done: boolean = false;

  static styles = css`
    .item {
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .item:hover {
      background-color: lightgray;
    }

    .item.done {
      text-decoration-line: line-through;
      text-decoration-color: green;
    }
  `;

  private _toggleItem() {
    this.done = !this.done;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="item ${this.done ? "done" : ""}">
        <p>${this.text}</p>
        <todo-toggle ?on=${this.done} @toggle=${this._toggleItem}></todo-toggle>
      </div>
    `;
  }
}
