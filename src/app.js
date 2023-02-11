import { getRandomInt } from "./utils.js";

/**
 * @typedef State
 * @property {number} repeats
 * @property {string} current
 */

const faces = ["one", "two", "three", "four", "five", "six"];

/** @type {HTMLDivElement}*/
const container = document.getElementById("container");

/** @type {HTMLDivElement}*/
const cube = document.getElementById("cube");

/** @type {HTMLDivElement}*/
const repeats = document.getElementById("repeats");

/** @param {State} state */
function render(state) {
  cube.dataset.shownFace = state.current;

  repeats.dataset.counter = state.repeats;
  repeats.style.opacity = state.repeats === 0 ? 0 : 1;
}

export function app() {
  /** @type {State} */
  const state = {
    repeats: 0,
    _current: "",
    set current(value) {
      this.repeats = value === this._current ? this.repeats + 1 : 0;
      console.log(this.repeats);
      this._current = value;
    },
    get current() {
      return this._current;
    },
  };

  state.current = "one";

  function castDice() {
    state.current = faces[getRandomInt(0, 5)];
    render(state);
  }

  container.onpointerdown = castDice;

  render(state);
}
