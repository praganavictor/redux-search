import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../store/actions/list";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <input
        placeholder="search"
        onChange={e => dispatch(actions.toggleSearch(e.target.value))}
      />
    </>
  );
}
