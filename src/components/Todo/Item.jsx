import React from "react";
import { useDispatch } from "react-redux";

import { REMOVE, TOGGLE } from "../../redux/actionTypes";
import { RemoveButton, ToggleButton, Text, StyledTodo } from "../../styles";

const Item = ({ todo, id, isChecked }) => {
  const dispatch = useDispatch();

  const toggleTodo = () => dispatch({ type: TOGGLE, payload: id });
  const removeTodo = () => dispatch({ type: REMOVE, payload: id });

  return (
    <StyledTodo>
      <ToggleButton isChecked={isChecked} onClick={toggleTodo}>
        <div />
      </ToggleButton>

      <Text isChecked={isChecked}>{todo}</Text>

      <RemoveButton onClick={removeTodo}>
        <div />
      </RemoveButton>
    </StyledTodo>
  );
};

export default Item;
