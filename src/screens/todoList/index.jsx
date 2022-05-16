import React, { useCallback, useState } from "react";
import { Container } from "react-bootstrap";

import { useFocus } from "../../hooks/useFocus";
import { AddItem } from "./addItem";
import { List } from "./list";
import { checkBoxStatus } from "../../constants";
import { sortHandler, generateRef } from "../../utils";

import "./style.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { refs, setRefs } = useFocus();

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    }
    let todo = {
      id: id,
      text: text,
      status: checkBoxStatus.pending,
    };
    refs.push(generateRef(id, { current: undefined }));
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    const newRefs = refs.filter((ref) => ref.id !== id);
    setRefs(newRefs);
    setTodos(updatedTodos);
  };

  const changeStatus = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const todo = todos[index];

    if (todo?.status === checkBoxStatus.completed) {
      todo.status = checkBoxStatus.crossed;
    } else if (todo?.status === checkBoxStatus.pending) {
      todo.status = checkBoxStatus.completed;
    } else if (todo?.status === checkBoxStatus.crossed) {
      todo.status = checkBoxStatus.completed;
    }

    todos[index] = todo;
    setTodos([...todos]);
  };

  const clearAllTodos = () => {
    const newRefs = refs.filter((ref) => {
      const index = todos.findIndex((todo) => todo.id === ref.id);
      if (index !== -1) {
        return false;
      }
      return true;
    });
    setRefs(newRefs);
    setTodos([]);
  };

  let sortedTodos = todos.sort(sortHandler);

  const updateRefList = (id, element) => {
    const index = refs.findIndex((ref) => ref.id === id);
    const refObj = refs[index];
    if (refObj) {
      refObj.ref = element;
      refs[index] = refObj;
    } else if (id && element) {
      const newItem = generateRef(id, element);
      refs.push(newItem);
    }
  };
  return (
    <Container>
      <div className="bg-white rounded p-3 my-3">
        <AddItem add={addTodo} updateRefList={updateRefList} />
      </div>
      <div className="bg-white rounded p-3 my-3">
        <List
          todos={sortedTodos}
          updateRefList={updateRefList}
          changeStatus={changeStatus}
          removeTodo={removeTodo}
          clearAllTodos={clearAllTodos}
        />
      </div>
    </Container>
  );
};

export default TodoList;
