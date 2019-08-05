import { actionsTypes } from "../constants/list";
const INITIAL_STATE = {
  list: ["item 1", "item 2", "item 3", "item 4", "item 5"]
};

const reducers = (state = INITIAL_STATE, { payload, type }) => {
  console.log("payload", payload);
  switch (type) {
    case actionsTypes.TOGGLE_SEARCH:
      state.list = state.list.filter(item => item.includes(payload));
      return { ...state };
    default:
      return state;
  }
};

export { reducers };
