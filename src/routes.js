import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import homePage from "./Components/Home/home.js";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={homePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
