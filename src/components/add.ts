import { css, html, LitElement } from "lit";
import { customElement, queryAsync } from "lit/decorators.js";

@customElement("todo-add")
export default class ToDoAdd extends LitElement {
  static styles = css`
    .button {
      background-color: #2196f3;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      margin: 0.5rem;
      cursor: pointer;
      border-radius: 16px;
      font-size: 1rem;
    }

    .todo-add {
      width: 50%;
      margin: 1rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    input {
      font-size: 1.5rem;
      height: 35px;
      border: none;
      width: 90%;
      border-bottom: 1px solid black;
      outline: none;
    }
  `;

  private _addToDo() {
    const input = this.shadowRoot?.querySelector(
      "#todo-text"
    ) as HTMLInputElement;
    if (input && input.value) {
      const event = new CustomEvent("addtodo", {
        detail: { text: input.value },
      });
      input.value = "";
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <div class="todo-add">
        <input
          id="todo-text"
          type="text"
          placeholder="What do you want to do?"
        />
        <button class="button" @click=${this._addToDo}>Add</button>
      </div>
    `;
  }
}
