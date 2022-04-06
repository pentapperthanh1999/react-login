import taskApi from "../api/taskApi";
// import { authHeader } from "../helpers/authHeader";

async function getAllTasks() {
  try {
    const response = await taskApi.getAll();
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function deleteTask(id) {
  try {
    const response = await taskApi.delete(id);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const taskService = {
  getAllTasks,
  deleteTask,
};
