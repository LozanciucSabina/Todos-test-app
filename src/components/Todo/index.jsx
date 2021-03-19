import React from "react";
import { useSelector } from "react-redux";

import Footer from "./Footer";
import Form from "./Form";
import Item from "./Item";
import { StyledTodoSection } from "../../styles";

const Todo = () => {
  const todos = useSelector((state) => state);

  const renderTodos = () =>
    todos.map((item) => <Item key={item.id} {...item} />);

  return (
    <StyledTodoSection>
      <Form />
      {renderTodos()}
      <Footer />
    </StyledTodoSection>
  );
};

export default Todo;
