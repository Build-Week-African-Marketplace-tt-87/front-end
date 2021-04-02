import styled from "styled-components";
import Form from "./Form";
import { Link } from "react-router-dom";

const styledSignIn = styled.div`
  h1 {
    margin: 30px;
    font-size: 45%;
    color: grey;
    background-color: #282c34;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    text-align: center;
  }
`;



function SignIn() {
  return (
      <styledSignIn>
      

        <h1>Sign In </h1>

        <Form />

        <footer>
          <h3> Don't have an account? Create </h3>

          <Link style={{ textDecoration: "none" }} to="/SignUp">
            {" "}
            <p>Sign Up</p>{" "}
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <p> Home </p>{" "}
          </Link>
        </footer>
      </styledSignIn>
  );
}

export default SignIn;
