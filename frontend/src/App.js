import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/common/GlobalStyles";
import NoMatch from "./components/pages/NoMatch";
import { Home } from "./containers/Home";
import { LoginPage } from "./containers/LoginPage";
import { RegisterPage } from "./containers/RegisterPage";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./router";
import { connect } from "react-redux";
import { history } from "./helpers/history";
import { alertActions } from "./actions";
import { Alert } from "./components/common/Alert.styled";
import CountDownPage from "./containers/CountDownPage";
import { FormMultiStepPage } from "./containers/FormMultiStepPage";
import { AdminPortal } from "./containers/AdminPortal";
import { Task } from "./containers/AdminPortal/Task";

import CreateTask from "./containers/AdminPortal/Task/CreateTask";

function App(props) {
  const { clearAlerts, alert } = props;
  useEffect(() => {
    history.listen((location, action) => {
      //clear alert on location change
      clearAlerts();
    });
  }, []);
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };

  return (
    <Router history={history} basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PrivateRoute path={"/"} component={Home} exact />
        <Switch>
          <Route path={"/login"} component={LoginPage} exact />
          <Route path={"/register"} component={RegisterPage} exact />
          <Route path={"/countdown"} component={CountDownPage} exact />
          <Route
            path={"/form-multi-step"}
            component={FormMultiStepPage}
            exact
          />
          <Route path={"/admin"} component={AdminPortal} />
          <Route path={"/tasks"} component={Task} />
          <Route path={"/tasks/create"} component={CreateTask} />
        </Switch>
        {alert.message && (
          <Alert type={alert.type}>{alert.message}</Alert>
          // <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
      </ThemeProvider>
    </Router>
  );
}
//get state from redux

function mapStateToProps(state) {
  const { alert, authentication } = state;
  return { alert, authentication };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapStateToProps, actionCreators)(App);
export { connectedApp as App };
