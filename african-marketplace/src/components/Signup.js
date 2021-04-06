import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// other dependencies
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";

//styling
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

  label {
    font-size: 20px;
    font-weight: bold;
    color: grey;
  }

  button {
    font-size: 15px;
    font-weight: bolder;
  }
`;

//validation
const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Passowrd must be at least five characters"),
});

const Signup = () => {
  // form single-setter
  const [disabled, setDisabled] = useState(true);

  // form setter
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",

    password: "",
  });

  //Form Authentication
  const validateChange = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  // button state change
  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  // button submit change
  // submitHistory as variable to useHistory from 'react-router-dom'
  const submitHistory = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    schema.isValid(form).then((valid) => {
      if (!valid) return;
    });

    axios
      .post(
        `https://african-marketplace-bwtt87.herokuapp.com/api/auth/register`,
        form
      )
      .then((res) => {
        submitHistory.push("/login");
      })
      .catch((err) => err);
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => {
      setDisabled(!valid);
    });
  }, [form, schema]);

  return (
    <styledSignUp>
      <h1>Sign Up </h1>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          UserName:
          <input
            onChange={change}
            value={form.username}
            name="username"
            type="text"
          />
        </label>

        <label>
          {" "}
          Password
          <input
            onChange={change}
            value={form.password}
            name="password"
            type="password"
          />
        </label>
        <button disabled={disabled}>Submit</button>
      </form>

      <h3> Already have an account?</h3>

      <Link style={{ textDecoration: "none" }} to="/Signin">
        {" "}
        <p>Sign In</p>{" "}
      </Link>

      <Link style={{ textDecoration: "none" }} to="/">
        {" "}
        <p> Home </p>{" "}
      </Link>
    </styledSignUp>
  );
};

export default Signup;
