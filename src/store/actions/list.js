import { actionsTypes } from "../constants/list";

const actions = {
  toggleSearch: payload => ({
    payload,
    type: actionsTypes.TOGGLE_SEARCH
  })
};

export { actions };
