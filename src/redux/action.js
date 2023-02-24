import { BOOK_FLIGHT, DELETE_FLIGHT } from "./actionTypes";

// Add the book
export const bookFlight = (values) => {
  return {
    type: BOOK_FLIGHT,
    payload: {
      ...values,
    },
  };
};

export const deleteFlight = (id) => {
  return {
    type: DELETE_FLIGHT,
    payload: id,
  };
};
