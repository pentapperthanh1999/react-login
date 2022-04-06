import { taskConstants } from "../constants";
import { taskService } from "../services";
import { history } from "../helpers/history";

//get all
function getAllRequest() {
  return { type: taskConstants.GET_ALL_REQUEST };
}
function getAllSuccess(tasks) {
  return { type: taskConstants.GET_ALL_SUCCESS, tasks };
}
function getAllFailure(error) {
  return { type: taskConstants.GET_ALL_FAILURE, error };
}
//delele
function deleteRequest() {
  return {
    type: taskConstants.DELETE_REQUEST,
  };
}
function deleteSuccess(task) {
  return {
    type: taskConstants.DELETE_SUCCESS,
    task,
  };
}
function deleteFailure(error) {
  return {
    type: taskConstants.DELETE_FAILURE,
    error,
  };
}
//dispatch action get all users;
function getAll() {
  return (dispatch) => {
    dispatch(getAllRequest());
    taskService.getAllTasks().then(
      (tasks) => {
        dispatch(getAllSuccess(tasks));
      },
      (error) => {
        dispatch(getAllFailure(error.toString()));
      }
    );
  };
}

function deleteTask(id) {
  return (dispatch) => {
    dispatch(deleteRequest());
    taskService.deleteTask(id).then(
      (task) => {
        dispatch(deleteSuccess(task));
      },
      (error) => {
        dispatch(deleteFailure(error));
      }
    );
  };
}

export const taskActions = {
  getAll,
  deleteTask,
};
