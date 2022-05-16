import { useEffect, useState, useCallback } from "react";
import { staticElementsIds } from "../screens/todoList/constants";

export const useFocus = () => {
  const [refs, setRefs] = useState([]);
  let focusId = null;

  const keyPressHandler = useCallback(
    (event) => {
      if (event?.key === "Tab" && refs.length && focusId) {
        console.log("refs ", refs);
        const index = refs.findIndex((refElemnt) => refElemnt.id === focusId);
        const element = refs[index];
        element.ref?.current?.focus();
        if (index <= refs.length - 2) {
          const nextFocusId = refs[index + 1].id;
          if (nextFocusId) {
            focusId = nextFocusId;
          }
        } else if (index == refs.length - 1) {
          focusId = staticElementsIds.ADD_INPUT;
        }
      }
    },
    [focusId, refs]
  );

  useEffect(() => {
    focusId = staticElementsIds.ADD_INPUT;
    document.addEventListener("keyup", keyPressHandler, true);
    return () => {
      document.removeEventListener("keyup", keyPressHandler, true);
    };
  }, [focusId, refs]);

  return { refs, setRefs, focusId };
};
