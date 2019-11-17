import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import CourseList from "../course/list";
import Course from "../course";
import AuthorList from "../author/list";
import Author from "../author";
import PageNotFound from "./pageNotFound";
import { AlertList } from "react-bs-notifier";
import { connect } from "react-redux";
import { removeAlert } from "../shared/alert/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.dismissAlert = this.dismissAlert.bind(this);
  }

  dismissAlert(alert) {
    this.props.dispatch(removeAlert(alert));
  }

  render() {
    return (
      <>
        <Nav />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/courses/:id/:operation(view|add|edit|delete)"
              component={Course}
            />
            <Route path="/courses" component={CourseList} />
            <Route
              path="/authors/:id/:operation(view|add|edit|delete)"
              component={Author}
            />
            <Route path="/authors" component={AuthorList} />
            <Route component={PageNotFound} />
          </Switch>
          <AlertList
            position="top-right"
            alerts={this.props.alerts}
            timeout={5000}
            onDismiss={this.dismissAlert}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    alerts: state.alerts
  };
}

export default connect(mapStateToProps)(App);
