import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// username: ________
// password: ________

// confirm (button)

//already have an Account?
// sign-in (button)

const StyledForm = styled.div`

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

const schema = yup.object().shape({
  username: yup.string().required("UserName is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least five characters"),
});

const Form = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",

    password: "",
  });

  const [disabled, setDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  const setFormErros = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };
  const change = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErros(name, valueToUse);
    setForm({ ...form, [name]: valueToUse });
  };

  const submit = (event) => {
    event.preventDefault();
    // const newName = {
    //     username: form.username.trim(),
    //     password: form.password
    // }
    
  };

  useEffect(() => {
    schema.isValid(form).then((valid) => setDisabled(!valid));
  }, [form]);

  return (
    <StyledForm>
      <div style={{ color: "blue" }}>
        <div> {errors.username} </div>
        <div> {errors.password} </div>
      </div>

      <form onSubmit={submit}>
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

        <button disabled={disabled}> Submit </button>
      </form>
    </StyledForm>
  );
};

export default Form;
