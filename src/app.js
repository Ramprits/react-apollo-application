import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import AuthRoute from "./utils/authGaurd";
import Navigation from "./components/Navigation";

import Home from "./pages/home";
import Item from "./pages/item";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Post from "./pages/post";
import CreatePost from "./pages/createPost";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <div className="container" style={{ marginTop: "3em" }}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/addPost" component={CreatePost} />
            <AuthRoute path="/signup" component={SignUp} />
            <AuthRoute path="/signin" component={SignIn} />
            <Route path="/:id" component={Item} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
