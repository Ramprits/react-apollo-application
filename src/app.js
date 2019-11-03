import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import SignUp from "./pages/signup";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <div className="container" style={{ marginTop: "2em" }}>
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Redirect from="/" to="/home" />
          </div>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
