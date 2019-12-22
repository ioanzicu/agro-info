import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import fire from "./helpers/firebaseConfig";

import Landing from "./pages/Landing_page";
import { LANDING, DASHBOARD, REGISTER, SIGN_IN } from "./constants/routes";
import Dashboard from "./pages/Dashboard_page";
import Register from "./pages/Register_page";
import SignIn from "./pages/SignIn_page";

const App: React.FC = () => {
  const [user, setUser] = useState<any | null>({ uid: "" });

  const authListener = () => {
    // is called whenever the user is registered, signed in
    fire.auth().onAuthStateChanged(fire_user => {
      console.log(fire_user);
      if (fire_user) {
        setUser(fire_user);
        localStorage.setItem("user", fire_user.uid);
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return <div className="App">{user ? <Landing /> : <Register />}</div>;
};

export default App;

// <Switch>
//   <Route
//     path={process.env.PUBLIC_URL + LANDING}
//     exact
//     component={Landing}
//   />
//   <Route
//     path={process.env.PUBLIC_URL + DASHBOARD}
//     component={Dashboard}
//   />
//   <Route path={process.env.PUBLIC_URL + REGISTER} component={Register} />
//   <Route path={process.env.PUBLIC_URL + SIGN_IN} component={SignIn} />
// </Switch>
