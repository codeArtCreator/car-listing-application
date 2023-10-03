import * as types from "./types";

export const setCurrentPage = (page: number) => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});

export const setSearchQuery = (query: string) => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});
