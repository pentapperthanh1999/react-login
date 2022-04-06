import { userConstants } from "../constants";
const initialState = {
  isLoading: false,
  users: [],
};
export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_ALL_REQUEST:
      return {
        isLoading: true,
        users: null,
      };
    case userConstants.GET_ALL_SUCCESS:
      return {
        isLoading: false,
        users: action.users.data,
      };
    case userConstants.GET_ALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
