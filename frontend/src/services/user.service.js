import userApi from "../api/userApi";

//login
async function login(email, password) {
  try {
    const data = {
      email,
      password,
    };
    const user = await userApi.login(data);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}
//logout
async function logout() {
  localStorage.removeItem("user");
  await userApi.logout({});
}
async function register(user) {
  try {
    const users = await userApi.register(user);
    localStorage.setItem("users", JSON.stringify(users));
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getAll() {
  try {
    const data = await userApi.getAll();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
}

export const userService = {
  login,
  logout,
  register,
  getAll,
};
