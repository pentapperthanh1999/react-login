import { taskConstants } from "../constants";
const initialState = {
  isLoading: false,
  tasks: [],
};
export function tasks(state = initialState, action) {
  switch (action.type) {
    case taskConstants.GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case taskConstants.GET_ALL_SUCCESS:
      return {
        isLoading: false,
        tasks: action.tasks.data,
      };
    case taskConstants.GET_ALL_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };
    case taskConstants.DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case taskConstants.DELETE_SUCCESS:
      const newTasks = state.tasks.filter(
        (task) => task._id !== action.task._id
      );
      return {
        ...state,
        isLoading: false,
        tasks: newTasks,
      };
    case taskConstants.DELETE_FAILURE:
      return {
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
