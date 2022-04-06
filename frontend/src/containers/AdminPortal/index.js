import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useReducer, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../../actions/";
import DefaultAdmin from "../../components/layouts/DefaultLayout/Admin";
import Loading from "../../components/Loading";
function AdminPortal(props) {
  const { getAllUsers, isLoading } = props;
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <DefaultAdmin>
      <div>Admin portal</div>
      {isLoading && <Loading />}
    </DefaultAdmin>
  );
}

AdminPortal.propTypes = {};
function mapStateToProps(state) {
  const { isLoading } = state.users;
  return { isLoading };
}

const actionCreators = {
  getAllUsers: userActions.getAll,
};

const connectedAdminPortal = connect(
  mapStateToProps,
  actionCreators
)(AdminPortal);
export { connectedAdminPortal as AdminPortal };
