import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import SignUp from "./Signup";
import StudentDashboard from "./StudentDashboard";
import AlumniDashboard from "./AlumniDashboard";
import AlumniRanking from "./AlumniRanking";
import StudentRanking from "./StudentRanking"

import "./App.css";
import TodoList from "./components/TodoList";
import TodoList1 from "./components/TodoList1";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/post-jobs">
            <TodoList />
          </Route>
          <Route exact path="/find-jobs">
            <TodoList1 />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/forgot-password/:id/:token">
            <ResetPassword />
          </Route>
          <Route path="/alumni-dashboard">
            <AlumniDashboard />
          </Route>
          <Route path="/student-dashboard">
            <StudentDashboard />
          </Route>
          <Route path="/alumni-ranking">
            <AlumniRanking />
          </Route>
          <Route path="/student-ranking">
            <StudentRanking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
