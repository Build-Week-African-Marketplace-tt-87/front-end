import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const StyledMain = styled.div`
  h1 {
    margin: 30px;
    color: grey;
  }

  p {
    margin: 20px;
    color: grey;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <h1> African MarketPlace </h1>

      <p>
        {" "}
        Enpowering small businesses owner, particualry women, to improve their
        businesses and economic opportunities to grow out of poverty.
      </p>

      <Link style={{ textDecoration: "none" }} to="/SignUp">
        {" "}
        <p>Sign Up</p>{" "}
      </Link>
      <Link style={{ textDecoration: "none" }} to="/SignIn">
        {" "}
        <p>Sign In</p>{" "}
      </Link>
    </StyledMain>
  );
};

export default Main;
