import React from "react";

import { Route, Routes as Switch } from "react-router-dom";

// import pages
import HomePage from "../pages/Homepage";
import Blog from "../pages/Blog";
import EventDetail from "../pages/EventDetail";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/headliner-app" element={<HomePage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/:id" element={<EventDetail />} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
