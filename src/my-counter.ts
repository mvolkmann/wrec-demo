import { css, html, Wrec } from "wrec";

/**
 * This is a counter web component.
 * @attr {number} [count=3] - initial count
 *
 * @attr {string} [size="medium"] - initial size
 *
 * @cssprop [--button-bg-color=lightgreen] - background color of the buttons
 *
 * @attribute {string} foo - description for foo
 *
 * @csspart bar - Styles the color of bar
 *
 * @slot - default, unnamed slot
 * @slot slotName - optionally add elements here
 *
 * @cssproperty --my-property - has no default value
 *
 * @prop {boolean} prop1 - first prop
 * @property {number} prop2 - second prop
 *
 * @fires first - description of when this event is fired
 * @fires {FooEvent} foo - fired when the moon is full
 * @event {BarEvent} bar - fired when the tide is high
 *
 * @summary This is a summary.
 *
 * @tag my-counter
 * @tagname my-counter
 */
export class MyCounter extends Wrec {
  count = 0;

  static properties = {
    count: { doc: "initial value", type: Number, reflect: true, value: 7 },
    onClick: { type: Function },
    onDecremented: { type: Function },
  };

  static css = css`
    :host {
      --font-size: 2rem;
      font-size: var(--font-size);
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      background-color: var(--button-bg-color, lightgreen);
      border: none;
      border-radius: 50%;
      font-size: var(--font-size);
      height: calc(var(--font-size) * 1.2);
      width: calc(var(--font-size) * 1.2);
    }

    button:disabled {
      opacity: 0.7;
    }
  `;

  static html = html`
    <div>
      <button onClick="decrement" type="button" disabled="this.count === 0">
        -
      </button>
      <span>this.count</span>
      <button onClick="this.count++" type="button">+</button>
      <span>(this.count < 10 ? "single" : "double") + " digit"</span>
    </div>
  `;

  decrement() {
    if (this.count > 0) this.count--;

    // This is my attempt to get something to appear
    // in the Storybook "Actions" tab, but nothing does.
    this.onClick();
    this.onDecremented();
  }
}

MyCounter.register();
