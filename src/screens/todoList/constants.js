export const staticElementsIds = {
  ADD_INPUT: "addInput",
  ADD_BTN: "addBtn",
  CLEAR_BTN: "clearBtn",
};

export const getTodosStaticElementsIds = () => Object.values(staticElementsIds);

export const getRef = (refs = [], id) => {
  const element = refs.find((refElemnt) => refElemnt.id === id);
  if (element) {
    return element?.ref;
  }
  return null;
};
