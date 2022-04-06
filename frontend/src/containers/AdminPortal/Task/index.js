import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import DefaultAdmin from "../../../components/layouts/DefaultLayout/Admin";
import Loading from "../../../components/Loading";
import {
  Pagination,
  TaskWrapper,
  TaskHeading,
  DataTableWrapper,
  Table,
  TdAction,
} from "./Task.styled";
import { connect } from "react-redux";
import { taskActions } from "../../../actions";
import { useSelector, useDispatch } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
function Task(props) {
  let { path, url } = useRouteMatch();
  console.log(url);
  const { getAllTasks, deleteTask, isLoading } = props;
  const tasks = useSelector((data) => data.tasks.tasks);
  useEffect(() => {
    getAllTasks();
  }, []);

  const handleRemoveTask = (e) => {
    if (window.confirm("are you sure?")) {
      const task_id = e.currentTarget.getAttribute("data-remove");
      deleteTask(task_id);
    }
    return false;
  };
  return (
    <DefaultAdmin>
      <TaskWrapper>
        <DataTableWrapper>
          <TaskHeading>
            <h2 className="title">
              Tasks Management
              <Link to={`${url}/create`}>
                <AiIcons.AiFillPlusCircle />
              </Link>
            </h2>
            <Link to="#">View more</Link>
          </TaskHeading>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Type</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Users</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks &&
                tasks.map((task, index) => {
                  return (
                    <tr className="" key={++index}>
                      <td>{index}</td>
                      <td>{task.title}</td>
                      <td>{task.type}</td>
                      <td>{task.status}</td>
                      <td>{task.priority}</td>
                      <th>
                        {task.users.map((user) => {
                          return (
                            <span key={user._id}>
                              {user.firstname} {user.lastname}
                            </span>
                          );
                        })}
                      </th>
                      <td>{task.start_time}</td>
                      <td>{task.end_time}</td>
                      <TdAction className="action">
                        <div className="action-list">
                          <div className="action-item">
                            <FaIcons.FaPenSquare className="action-icon edit"></FaIcons.FaPenSquare>
                          </div>

                          <div className="action-item">
                            <FaIcons.FaTrash
                              className="action-icon remove"
                              onClick={handleRemoveTask}
                              data-remove={task._id}
                            ></FaIcons.FaTrash>
                          </div>
                          <div className="action-item">
                            <FaIcons.FaEyeSlash className="action-icon view"></FaIcons.FaEyeSlash>
                          </div>
                        </div>
                      </TdAction>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <Pagination>
            <div className="pagination-item active">1</div>
            <div className="pagination-item">2</div>
            <div className="pagination-item">3</div>
          </Pagination>
        </DataTableWrapper>
      </TaskWrapper>
      {isLoading && <Loading></Loading>}
      <Switch>
        <Route path={`${path}/create`} exact>
          <CreateTask />
        </Route>
        <Route path={`${path}/update`} exact>
          <UpdateTask />
        </Route>
      </Switch>
    </DefaultAdmin>
  );
}
function mapStateToProps(state) {
  const { isLoading, tasks } = state.tasks;
  return { isLoading, tasks };
}

const actionCreators = {
  getAllTasks: taskActions.getAll,
  deleteTask: taskActions.deleteTask,
};

const connectedTask = connect(mapStateToProps, actionCreators)(Task);
export { connectedTask as Task };
