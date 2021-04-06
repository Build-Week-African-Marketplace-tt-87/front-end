import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// other dependencies
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

const Styledsignins = styled.div`
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

const Signin = () => {
  // form setter
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Form Authentication
  const validate = (evt) => {
    const userInput = {
      ...form,
      [evt.target.name]: evt.target.value,
    };

    schema
      .isValid(userInput)
      .then((res) => {
        setErrors({
          ...errors,
          [evt.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [evt.target.name]: err.errors[0],
        });
      });
  };

  // username checker
  const schema = yup.object().shape({
    username: yup.string().required("UserName is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Passowrd must be at least five characters"),
  });

  // button state change
  const change = (e) => {
    e.persist();
    validate(e);

    const theValue = e.target.value;
    setForm({ ...form, [e.target.value]: theValue });
  };

  // button submit change
  // submitHistory as variable to useHistory from 'react-router-dom'
  const submitHistory = useHistory();

  const submit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://african-marketplace-bwtt87.herokuapp.com/api/auth/login",
        form
      )
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("User ID", response.data.id);
        submitHistory.push("/Homepage");
      })
      .catch((err) => err);
    setForm({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Sign In </h1>
      <form onSubmit={submit}>
        <label>
          {" "}
          UserName:
          <input
            onChange={change}
            value={form.value}
            name="username"
            type="text"
          />
        </label>

        <label>
          {" "}
          Password
          <input
            onChange={change}
            value={form.value}
            name="password"
            type="password"
          />
        </label>

        <button>Submit</button>
      </form>

      <h3> Don't have an account? Create one here! </h3>

      <Link style={{ textDecoration: "none" }} to="/Signup">
        {" "}
        <p>Sign Up</p>{" "}
      </Link>

      <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <p> Home </p>{" "}
      </Link>
    </div>
  );
};

export default Signin;
