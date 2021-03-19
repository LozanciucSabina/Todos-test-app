import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as id } from "uuid";

import { ADD } from "../../redux/actionTypes";
import { Input } from "../../styles";

const Form = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  function submitTodo(event) {
    event.preventDefault();

    dispatch({
      type: ADD,
      payload: { todo, id: id(), isChecked: false },
    });

    setTodo("");
  }

  return (
    <>
      <form onSubmit={submitTodo}>
        <Input
          type="text"
          value={todo}
          placeholder="What needs to be done?"
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </>
  );
};

export default Form;
