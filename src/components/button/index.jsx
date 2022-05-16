import React, { useLayoutEffect, useRef } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  id,
  className,
  children,
  onClick,
  updateRefList,
}) => {
  const btnRef = useRef();
  useLayoutEffect(() => {
    if (btnRef && updateRefList) {
      updateRefList(id, btnRef);
    }
  }, [id]);
  return (
    <Button
      ref={btnRef}
      onClick={onClick}
      className={className}
      onKeyDown={(event) => {
        event.preventDefault();
        if (event.key === "Enter") {
          onClick();
        }
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
