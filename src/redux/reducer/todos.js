import { ADD, TOGGLE, REMOVE } from "../actionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case TOGGLE:
      return state.map((todo) => {
        const { id, isChecked } = todo;
        if (id === action.payload) {
          return { ...todo, isChecked: !isChecked };
        }
        return todo;
      });
    case REMOVE:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}
