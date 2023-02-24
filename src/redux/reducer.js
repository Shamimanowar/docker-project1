import { BOOK_FLIGHT, DELETE_FLIGHT } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case BOOK_FLIGHT:
      // if (state.length >= 3) {
      //   alert("You are not allowed to book more than 3 filghts");
      //   return state;
      // }
      //? To determine the ID of the new booking
      const IDs = state.length !== 0 ? state?.map((item) => item.id) : [0];
      return [
        ...state,
        {
          id: +Math.max(...IDs) + 1, //? Increasing the value of id 1 from the previous max value of id
          ...action.payload,
        },
      ];

    case DELETE_FLIGHT:
      const newState = state.filter((item) => item?.id !== action.payload);
      return newState;

    default:
      return state;
  }
};

export default reducer;
