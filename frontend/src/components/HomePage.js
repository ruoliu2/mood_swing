import React from "react";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <p>This is the home page</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default HomePage;
