import axiosClient from "./axiosClient";

const taskApi = {
  getAll: (params) => {
    const url = "/tasks";
    return axiosClient.get(url, {
      params,
      headers: {
        message: "Get all todos",
      },
    });
  },
  delete: (params) => {
    const url = `/tasks/${params}`;
    return axiosClient.delete(url, {
      params,
    });
  },
};
export default taskApi;
