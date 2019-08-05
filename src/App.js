import React from "react";
import { Provider } from "react-redux";

import Header from "./Components/Header/index";
import List from "./Components/List/index";

import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <List />
      </Provider>
    </div>
  );
}

export default App;
