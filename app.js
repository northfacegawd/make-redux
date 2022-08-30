import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";
import { decrease, increase, reset } from "./actions.js";

const store = createStore(reducer);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter } = store.getState();

  counterDisplay.textContent = counter;
});

store.dispatch(reset());

btnReset.addEventListener("click", () => {
  store.dispatch(reset());
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(increase());
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
