import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("todo-toggle")
export default class ToDoToggle extends LitElement {
  static styles = css`
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;

  @property({ type: Boolean })
  on: boolean = false;

  private _emitToggle() {
    const event = new Event("toggle", { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  render() {
    return html`<label class="switch">
      <input type="checkbox" ?checked=${this.on} @change=${this._emitToggle} />
      <span class="slider round"></span>
    </label>`;
  }
}
