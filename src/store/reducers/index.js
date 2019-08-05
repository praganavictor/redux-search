import { combineReducers } from "redux";

import { reducers as listReducers } from "./list";

const reducers = combineReducers({
  listReducers
});

export { reducers };
