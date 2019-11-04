import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/authContext";
import AuthRoute from "./utils/authGaurd";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <div className="container" style={{ marginTop: "2em" }}>
          <Switch>
            <Route path="/home" component={Home} />
            <AuthRoute path="/signup" component={SignUp} />
            <AuthRoute path="/signin" component={SignIn} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
