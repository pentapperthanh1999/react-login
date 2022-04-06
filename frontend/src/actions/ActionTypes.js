const createActionMap = (actionList: any) => {
  const map: any = {};
  const actions = actionList.split("\n");
  actions.forEach((action: any) => {
    const name = action.trim();
    if (name !== "") {
      map[`${name}_REQUEST`] = `${name}_REQUEST`;
      map[`${name}_SUCCESS`] = `${name}_SUCCESS`;
      map[`${name}_FAILURE`] = `${name}_FAILURE`;
      map[`CREATE_${name}_SUCCESS`] = `CREATE_${name}_SUCCESS`;
      map[`UPDATE_${name}_SUCCESS`] = `UPDATE_${name}_SUCCESS`;
      map[`FETCH_${name}_SUCCESS`] = `FETCH_${name}_SUCCESS`;
      map[`SEARCH_${name}_SUCCESS`] = `SEARCH_${name}_SUCCESS`;
      map[`GET_${name}_BY_ID_SUCCESS`] = `GET_${name}_BY_ID_SUCCESS`;
      map[`DEACTIVATE_${name}_SUCCESS`] = `DEACTIVATE_${name}_SUCCESS`;
      map[`ACTIVATE_${name}_SUCCESS`] = `ACTIVATE_${name}_SUCCESS`;
    }
  });
  return map;
};
const asyncActions = createActionMap(`   LOGIN   LOGOUT   REGISTER   USER `);
const singleActions = {
  IS_LOGGED: "IS_LOGGED",
  LOGIN_IS_LOADING: "LOGIN_IS_LOADING",
  LOGIN_HAS_ERROR: "LOGIN_HAS_ERROR",
  LOGOUT: "LOGOUT",
};
const types = { ...asyncActions, ...singleActions };
export default types;
