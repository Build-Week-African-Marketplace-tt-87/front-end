
import styled from "styled-components";
import Form from "./Form";
import { Link } from "react-router-dom";

const styledSignUp = styled.div`
  h1 {
    margin: 30px;
    font-size: 45%;
    color: grey;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 2vmin);
  }
`;


function SignUp() {
  return (
    <styledSignUp>
      

      <h1>Sign Up </h1>

      <Form />

      <footer>
        <h3> Already have an account? Sign-In </h3>
        <Link style={{ textDecoration: "none" }} to="/SignIn">
          {" "}
          <p>Sign In</p>{" "}
        </Link>

        <Link style={{ textDecoration: "none" }} to="/">
          {" "}
          <p> Home </p>{" "}
        </Link>
      </footer>
    </styledSignUp>
  );
}

export default SignUp;
