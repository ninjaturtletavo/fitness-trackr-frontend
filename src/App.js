import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Activities from "./components/Activities";
import Routines from "./components/Routines";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyRoutines from "./components/MyRoutines";

const App = () => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [activities, setActivities] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar
          token={token}
          setToken={setToken}
          userData={userData}
          setUserData={setUserData}
        />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/activities" component={Activities} />
          <Route path="/routines" component={Routines} />
          <Route path="/routines" component={MyRoutines} />
        </Switch>

        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <Switch>
              <Route path="/users/login" component={Login} />
              <Route path="/users/register" component={Signup} />
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
};

export default App;
