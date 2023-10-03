import * as types from "../actions/types";
import Car from "../../interfaces/car";
import data from "../../data";

interface CarState {
  cars: Car[];
  currentPage: number;
  pageSize: number;
  searchQuery: string;
}

const initialState: CarState = {
  cars: data,
  currentPage: 1,
  pageSize: 6,
  searchQuery: "",
};

const carReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case types.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
