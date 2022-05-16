import React from "react";

import { Button } from "../../components";
import { staticElementsIds } from "./constants";
import { ListItem } from "./listItem";

export const List = ({
  todos = [],
  updateRefList,
  changeStatus,
  removeTodo,
  clearAllTodos,
}) => (
  <div className="todo-list">
    <div className="d-flex justify-content-between list-header">
      <div>
        <h4>To Do List</h4>
      </div>
      <div>
        <Button
          id={staticElementsIds.CLEAR_BTN}
          updateRefList={updateRefList}
          className="btn btn-sm"
          onClick={clearAllTodos}
        >
          Clear
        </Button>
      </div>
    </div>
    <div className="mt-3">
      {todos.length
        ? todos.map((item, index) => (
            <ListItem
              key={"list-" + index}
              item={item}
              updateRefList={updateRefList}
              changeStatus={changeStatus}
              removeTodo={removeTodo}
            />
          ))
        : ""}
    </div>
  </div>
);
