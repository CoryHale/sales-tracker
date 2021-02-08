import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './login-components/Login';
import PrivateRoute from "./login-components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute exact path="dashboard" /> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
