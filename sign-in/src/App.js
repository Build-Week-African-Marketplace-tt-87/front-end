import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn"

const styledSignUp = styled.div`
  h1 {
    margin: 30px;
    font-size: 45%;
    color: grey;
  }
`;

function App() {
  return (
    <styledSignUp>
      <Router>
        <Switch>
          
          <Route exact path="/" component={Home} />
          
          <Route exact path="/SignUp" component={SignUp} />

          <Route exact path="/SignIn" component={SignIn} />

        </Switch>
      </Router>
    </styledSignUp>
  );
}

export default App;
