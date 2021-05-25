import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = ( newTodo) => {
      dispatch({
          type: "add",
          payload: newTodo,
      })
      
  }

 
  return (
    <div className="container">
      <h1>Todo List App ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <TodoList 
            todos={ todos }
            handleToggle= { handleToggle }
            handleDelete= { handleDelete }
          />
        </div>

        <div className="col-4">
            <TodoAdd 
                handleAddTodo={ handleAddTodo }
            />
        </div>
      </div>
    </div>
  );
};
