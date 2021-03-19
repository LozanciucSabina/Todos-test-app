import React from "react";

import { Provider } from "react-redux";

import Todo from "./components/Todo";
import store from "./redux/store";
import { Title, GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Title>Todos</Title>
      <Todo />
    </Provider>
  );
}

export default App;
