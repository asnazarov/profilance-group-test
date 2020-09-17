import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { compose } from "redux";
// import { connect } from "react-redux";
// import { initialization } from './redux/app-reducer';
// import { withSuspense } from "./hok/withSuspense";
import LoginContainer from './components/Login/LoginContainer';



class App extends React.Component {
  render() {
    return (
      <div className="main">
        <HeaderContainer />
        {/* <Navbar /> */}
        <div>
          {/* <Route path='/profile/:id?' render={() => <ProfileContainer/>} /> */}
          {/* <Route path='/users' render={() => <UsersContainer />} /> */}
          {/* <Route path='/dialogs' render={withSuspense(DialogsContainer)} /> */}
          {/* <Route path='/news' render={() => <News />} /> */}
          {/* <Route path='/music' render={() => <Music />} /> */}
          <Route path='/login' render={() => <LoginContainer />} />
        </div>
      </div>
    )
  }
}

export default compose(
  withRouter,
)(App);