import React from "react";
import { useSelector } from "react-redux";

import { selectors } from "../../store/selectors/list";

export default function List() {
  const allList = useSelector(selectors.getList);
  console.log("allList", allList);

  return (
    <>
      <ul>
        {allList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
