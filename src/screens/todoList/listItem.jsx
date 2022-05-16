import React, { useLayoutEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { Button, Checkbox } from "../../components";
import { checkBoxStatus } from "../../constants";
import { isCheckBoxSelected } from "../../utils";

export const ListItem = ({ item, changeStatus, updateRefList, removeTodo }) => {
  return (
    <div className="d-flex justify-content-between list-item">
      <div className="d-flex">
        <div>
          <Checkbox
            checked={isCheckBoxSelected(item.status)}
            onClick={() => changeStatus(item.id)}
          />
        </div>
        <div className="px-2">
          <h6
            className={
              item.status === checkBoxStatus.completed ? "strikethrough" : ""
            }
          >
            {item.text}
          </h6>
        </div>
      </div>
      <div>
        <Button
          id={item.id}
          updateRefList={updateRefList}
          className="btn-sm btn-bin"
          onClick={() => removeTodo(item.id)}
        >
          <RiCloseCircleLine style={{ marginRight: 5 }} />
        </Button>
      </div>
    </div>
  );
};
