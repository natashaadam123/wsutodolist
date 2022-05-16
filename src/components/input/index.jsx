import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { InputGroup } from "react-bootstrap";

import "./style.scss";

const Input = ({
  id,
  type,
  onChage,
  defaultValue,
  value,
  placeholder,
  className,
  onKeyDown,
  onKeyUp,
  updateRefList,
}) => {
  const inputRef = useRef();
  useLayoutEffect(() => {
    if (inputRef) {
      updateRefList(id, inputRef);
    }
  });
  return (
    <InputGroup>
      <input
        ref={inputRef}
        className={`input focus-input p-1 w-100 ${className}`}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChage}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />
    </InputGroup>
  );
};
export default Input;
