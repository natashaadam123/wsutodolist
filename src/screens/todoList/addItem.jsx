import React, { useState } from "react";

import { Input, Button } from "../../components";
import { staticElementsIds } from "./constants";

export const AddItem = ({ add, updateRefList }) => {
  const [newValue, setNewValue] = useState("");

  const onEnter = (event) => {
    if (newValue) {
      if (event === "btn") {
        add(newValue);
        setNewValue("");
      } else if (event?.key === "Enter") {
        add(newValue);
        setNewValue("");
      }
    }
  };

  const onInputChange = ({ target: { value } }) => {
    setNewValue(value);
  };
  return (
    <div className="w-100">
      <div className="d-flex flex-direction-row justify-content-center">
        <Input
          id={staticElementsIds.ADD_INPUT}
          type="text"
          placeholder="Add Item"
          value={newValue}
          className="shadow-none"
          updateRefList={updateRefList}
          onKeyDown={onEnter}
          onChage={onInputChange}
        />
        <Button
          id={staticElementsIds.ADD_BTN}
          className="btn btn-primary btn-md rounded-0"
          updateRefList={updateRefList}
          onClick={() => onEnter("btn")}
        >
          +
        </Button>
      </div>
    </div>
  );
};
