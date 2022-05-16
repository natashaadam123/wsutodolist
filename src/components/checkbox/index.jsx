import React, { useLayoutEffect, useRef } from "react";
import "./style.scss";

const Checkbox = ({ id, checked, onClick, updateRefList }) => {
  const checkBoxRef = useRef(null);
  useLayoutEffect(() => {
    if (id && updateRefList) {
      updateRefList(id, checkBoxRef);
    }
  }, [id]);
  return (
    <input
      ref={checkBoxRef}
      defaultChecked={checked}
      type="checkbox"
      className="checkbox primary"
      onClick={onClick}
      onKeyDown={(event) => event.key === "Enter" && onClick()}
    />
  );
};

export default Checkbox;
