import { checkBoxStatus } from "./constants";

export const isCheckBoxSelected = (status) => {
  if (status === checkBoxStatus.completed) {
    return true;
  }
  return false;
};

export const sortHandler = (a, b) => {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
};

export const generateRef = (id, element) => ({ id: id, ref: element });
