import React, { Component } from "react";
import { connect } from "react-redux";
import { LinkStyled, Container } from "../../components/common";
import Header from "../../components/Layouts/DefaultLayout/Header";
import Footer from "../../components/Layouts/DefaultLayout/Footer";
import Intro from "./Intro";
import Features from "./Features";
class Home extends Component {
  render() {
    const { user } = this.props;
    // console.log(user.user);
    return (
      <Container className="mg-top-53">
        <Header></Header>
        <div>
          <h1>Hi {user && user.user.username}!</h1>
          <p>You're logged in with React!!</p>
          <LinkStyled to="/login" className="btn btn-secondary">
            Logout
          </LinkStyled>
        </div>
        <Intro></Intro>
        <Features></Features>
        <Footer></Footer>
      </Container>
    );
  }
}

function mapStatetoProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const connectedHome = connect(mapStatetoProps, null)(Home);
export { connectedHome as Home };
