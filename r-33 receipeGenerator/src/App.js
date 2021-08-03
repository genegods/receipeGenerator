import React from "react";
import "./App.css";
import ReceipeApp from "./components/receipe/ReceipeApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <ReceipeApp />
      </React.Fragment>
    </Provider>
  );
};

export default App;
