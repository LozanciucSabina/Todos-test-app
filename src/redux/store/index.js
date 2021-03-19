import { createStore } from "redux";

import todos from "../reducer/todos";

const store = createStore(todos);

export default store;
