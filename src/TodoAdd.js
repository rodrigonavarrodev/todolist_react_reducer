import React from "react";
import { useForm } from "./useFrom";

export const TodoAdd = ({ handleAddTodo }) => {
    
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
      e.preventDefault();

      if (description.trim().length <= 1) {
        return;
      }

      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
  
      handleAddTodo(newTodo);
       reset();
  }

  return (
    <>
      <h4>Agregar Tarea</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary mt-1 btn-block">
          Agregar
        </button>
      </form>
    </>
  );
};
