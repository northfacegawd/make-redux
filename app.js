import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";
import { decrease, increase, reset } from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(increase());
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(reset());
