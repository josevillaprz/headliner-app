import React from "react";

import { Route, Routes as Switch } from "react-router-dom";

// import pages
import HomePage from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Event from "../pages/Event/Event";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/headliner-app" element={<HomePage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/event" element={<Event />} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
