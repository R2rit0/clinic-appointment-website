import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/NavBar/navBar";
import Legal from "./pages/dsgvo-tos/legal";
import Calendar from "./pages/calendar/Calendar";
import InputWithIcon from "./pages/userInfo/UserInfo";
import Time from "./pages/time/Time";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tos">
            <Legal />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/time">
            <Time />
          </Route>
          <Route path="/userInfo">
            <InputWithIcon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
