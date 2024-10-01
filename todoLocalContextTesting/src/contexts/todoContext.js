import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, text: "Buy milk", completed: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
  updateTodo: (id,todo) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
