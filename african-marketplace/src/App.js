import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Main from "./components/Main";
import Aboutus from "./components/Aboutus";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage/Homepage"

const App = () => {
  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/Aboutus">
            <Aboutus/>
          </Route>

          <Route path="/Signin">
            <Signin/>
          </Route>

          <Route path="/Signup">
            <Signup/>
          </Route>
          
          <Route path="/Homepage">
            <Homepage/>
          </Route>

        </Switch>
      </div>
  );
}

export default App;
